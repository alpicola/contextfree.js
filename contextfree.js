var ContextFree;

(function() {

ContextFree = function(source, canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.rules = {};
    this.x = this.y = 0;
    this.width = this.height = 3;
    var source = CFDG.parse(source)
    source.forEach(function(statement) {
        var rule, adjustment;
        switch (statement[0]) {
            case 'STARTSHAPE':
                this.startshape = statement[1];
                break;
            case 'BACKGROUND':
                adjustment = compileAdjustments(statement[1]);
                this.background = adjustColor([0, 0, 1, 1], adjustment[1]);
                break;
            case 'SIZE':
                statement[1][1].forEach(function(adjustment) {
                    switch (adjustment[0]) {
                        case 'XSHIFT':
                            this.x = adjustment[1];
                            break;
                        case 'YSHIFT':
                            this.y = adjustment[1];
                            break;
                        case 'SIZE':
                            this.width = adjustment[1];
                            this.height = adjustment[2];
                            break;
                    }
                }, this);
                break;
            case 'RULE':
                rule = {
                    weight: statement[2],
                    replacements: statement[3].map(compileReplacement)
                };
                if (this.rules[statement[1]] != null) {
                    this.rules[statement[1]].push(rule);
                } else {
                    this.rules[statement[1]] = [rule];
                }
                break;
        }
    }, this);
    for (var name in this.rules) {
        var sum = this.rules[name].reduce(function(sum, rule) {
            return sum + rule.weight
        }, 0);
        this.rules[name].forEach(function(rule) {
            rule.probability = rule.weight / sum;
        });
    }

    var shapes = {
        SQUARE: function(context) {
            context.fillRect(-0.5, -0.5, 1, 1);
        },
        CIRCLE: function(context) {
            context.beginPath();
            context.arc(0, 0, 0.5, 0, Math.PI * 2, false);
            context.fill();
        },
        TRIANGLE: function(context) {
            context.beginPath();
            context.moveTo(0, 0.57735);
            context.lineTo(-0.5, -0.28828);
            context.lineTo(0.5, -0.28828);
            context.closePath();
            context.fill();
        }
    };
    for (var shape in shapes) (function() {
        var drawShape = shapes[shape];
        this.rules[shape] = [{
            replacements: [function(transform, color) {
                this.context.setTransform.apply(this.context, transform);
                this.context.fillStyle = 'rgba(' + hsv2rgb.apply(null, color).join() + ')';
                drawShape(this.context);
            }],
            probability: 1
        }];
    }).call(this);

    this._maxLoop = 1000;
};

ContextFree.prototype.render = function(callback) {
    this._callback = callback;

    if (this._intervalID) {
        window.clearInterval(this._intervalID);
    }

    this.context.setTransform(1, 0, 0, 1, 0, 0);
    if (this.background) {
        this.context.fillStyle = 'rgba(' + hsv2rgb.apply(null, this.background) + ')';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } else {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    var width = this.canvas.width;
    var height = this.canvas.height;
    var scale = Math.min(width / this.width, height / this.height);
    var transform = [scale, 0, 0, -scale, width/2 + this.x*scale, height/2 - this.y*scale];
    var color = [0, 0, 0, 1];
    var rules = this.rules[this.startshape];
    var p = 0, r = Math.random();
    for (var i = 0, len = rules.length; i < len; i++) {
        p += rules[i].probability;
        if (r < p) {
            this.queue = rules[i].replacements.map(function(replacement) {
                return function() { replacement.call(this, transform, color); };
            });
            break;
        }
    }

    var that = this;
    this._loop = 0;
    this._interval = 30;
    this._intervalID = window.setInterval(function() {
        that._render();
    }, this._interval);
};

ContextFree.prototype._render = function() {
    var start = Date.now();
    do {
        var c = 1000;
        while (--c && this.queue.length) {
            this.queue.shift().call(this);
        }
    } while (Date.now - start < this._interval);

    if (!this.queue.length || ++this._loop > this._maxLoop) {
        this.stop();
    }
};

ContextFree.prototype.stop = function() {
    if (this._intervalID) {
        window.clearInterval(this._intervalID);
        this._intervalID = null;
        if (this._callback) {
            this._callback();
            this._callback = null;
        }
    }
};

function compileReplacement(replacement) {
    var adjustments = compileAdjustments(replacement[2]);
    var geomAdj  = adjustments[0];
    var colorAdj = adjustments[1];

    if (replacement[0] == 'REPLACEMENT') {
        return function(transform, color) {
            var area = Math.abs(transform[0] * transform[3] - transform[1] * transform[2]);
            if (area < 0.5) return;

            transform = adjustTransform(transform, geomAdj);
            color = adjustColor(color, colorAdj);

            var rules = this.rules[replacement[1]];
            var p = 0, r = Math.random();
            var push = Array.prototype.push;
            for (var i = 0, len = rules.length; i < len; i++) {
                p += rules[i].probability;
                if (r < p) {
                    push.apply(this.queue, rules[i].replacements.map(function(replacement) {
                        return function() { replacement.call(this, transform, color); };
                    }));
                    break;
                }
            }
        };
    }
    
    if (replacement[0] == 'REPLACEMENT_LOOP') {
        var replacements = replacement[3].map(compileReplacement);
        return function(transform, color) {
            var area = Math.abs(transform[0] * transform[3] - transform[1] * transform[2]);
            if (area < 0.5) return;

            var n = replacement[1];
            var push = Array.prototype.push;
            for (;;) {
                push.apply(this.queue, replacements.map(function(replacement) {
                    return (function(transform, color) {
                        return function() { replacement.call(this, transform, color); };
                    })(transform, color);
                }));

                if (!(--n)) break;

                transform = adjustTransform(transform, geomAdj);
                color = adjustColor(color, colorAdj);
            }
        };
    }
}

function compileAdjustments(adjustments) {
    if (adjustments[2]) {
        adjustments = adjustments[1];
    } else {
        var o = {};
        var geomAdjustments = 'XSHIFT YSHIFT ROTATE SIZE SKEW FLIP'.split(' ');
        adjustments = adjustments[1].filter(function(adjustment) {
            if (geomAdjustments.indexOf(adjustment[0]) != -1) {
                o[adjustment[0]] = adjustment;
                return false;
            } else {
                return true
            }
        });
        geomAdjustments.forEach(function(manuplation) {
            if (manuplation in o) adjustments.push(o[manuplation]);
        });
    }

    var transform = [1, 0, 0, 1, 0, 0];
    var color = [0, 0, 0, 1];
    adjustments.forEach(function(adjustment) {
        var c, s, t;
        switch (adjustment[0]) {
            case 'XSHIFT':
                transform[4] += transform[0] * adjustment[1];
                break;
            case 'YSHIFT':
                transform[5] += transform[3] * adjustment[1];
                break;
            case 'ROTATE':
                c = Math.cos(Math.PI * adjustment[1] / 180);
                s = Math.sin(Math.PI * adjustment[1] / 180);
                t = transform.slice(0, 4);
                transform[0] = t[0] * c - t[1] * s;
                transform[1] = t[0] * s + t[1] * c;
                transform[2] = t[2] * c - t[3] * s;
                transform[3] = t[2] * s + t[3] * c;
                break;
            case 'SIZE':
                transform[0] *= adjustment[1];
                transform[1] *= adjustment[2];
                transform[2] *= adjustment[1];
                transform[3] *= adjustment[2];
                break;
            case 'SKEW':
                break;
            case 'FLIP':
                c = Math.cos(-Math.PI * adjustment[1] / 90);
                s = Math.sin(-Math.PI * adjustment[1] / 90);
                t = transform.slice(0, 4);
                transform[0] = t[0] * c + t[1] * s;
                transform[1] = t[0] * s - t[1] * c;
                transform[2] = t[2] * c + t[3] * s;
                transform[3] = t[2] * s - t[3] * c;
                break;
            case 'HUE':
                color[0] = adjustment[1];
                break;
            case 'SATURATION':
                color[1] = adjustment[1];
                break;
            case 'BRIGHTNESS':
                color[2] = adjustment[1];
                break;
            case 'ALPHA':
                color[3] = adjustment[1];
                break;
        }
    });

    return [transform, color];
}

function adjustTransform(transform, adj) {
    return [
        transform[0] * adj[0] + transform[1] * adj[2],
        transform[0] * adj[1] + transform[1] * adj[3],
        transform[2] * adj[0] + transform[3] * adj[2],
        transform[2] * adj[1] + transform[3] * adj[3],
        transform[0] * adj[4] + transform[1] * adj[5] + transform[4],
        transform[2] * adj[4] + transform[3] * adj[5] + transform[5],
    ];
}

function adjustColor(color, adj) {
    color = color.slice();
    if (adj[0] != 0) {
        color[0] += colorAdj[0];
        color[0] %= 360;
    }
    for (var i = 1; i < 4; i++) {
        var a = adj[i];
        if (a > 0) {
            color[i] += (1-color[i]) * a;
        } else if (a < 0) {
            color[i] += color[i] * a;
        }
    }
    return color;
}

function hsv2rgb(h, s, v, a) {
    var r, g, b;
    if (s == 0) {
        r = g = b = Math.round(v * 0xff);
    } else {
         v *= 0xff;
         h = ((h %= 360) < 0 ? h + 360 : h) / 60;
         var hi = h | 0;
         switch (hi) {
             case 0:
                r = Math.round(v);
                g = Math.round(v * (1 - (1 - h + hi) * s));
                b = Math.round(v * (1 - s));
                break;
            case 1:
                r = Math.round(v * ( 1 - s * h + s * hi));
                g = Math.round(v);
                b = Math.round(v * (1 - s));
                break;
            case 2:
                r = Math.round(v * (1 - s));
                g = Math.round(v);
                b = Math.round(v * (1 - (1 - h + hi) * s));
                break;
            case 3:
                r = Math.round(v * (1 - s));
                g = Math.round(v * ( 1 - s * h + s * hi));
                b = Math.round(v);
                break;
            case 4:
                r = Math.round(v * (1 - (1 - h + hi) * s));
                g = Math.round(v * (1 - s));
                b = Math.round(v);
                break;
            case 5:
                r = Math.round(v);
                g = Math.round(v * (1 - s));
                b = Math.round(v * ( 1 - s * h + s * hi));
                break;
         }
    }
    return [r, g, b, a];
}

})();
