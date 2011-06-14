var ContextFree;

(function() {

'use strict';

ContextFree = function(source, canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.x = this.y = 0;
    this.left = this.top = 0;
    this.right = this.bottom = 0;
    this.width = this.height = 3;
    this.scale = Math.min(canvas.width, canvas.height) / 3;
    this.clip = false;
    this.rules = {};
    this.primitives = {
        SQUARE: function() {
            this.context.fillRect(-0.5, -0.5, 1, 1);
        },
        CIRCLE: function() {
            this.context.beginPath();
            this.context.arc(0, 0, 0.5, 0, Math.PI * 2, false);
            this.context.fill();
        },
        TRIANGLE: function(context) {
            this.context.beginPath();
            this.context.moveTo(0, 0.57735);
            this.context.lineTo(-0.5, -0.28828);
            this.context.lineTo(0.5, -0.28828);
            this.context.closePath();
            this.context.fill();
        }
    };

    CFDG.parse(source).forEach(function(statement) {
        switch (statement[0]) {
            case 'STARTSHAPE':
                this.startshape = statement[1];
                break;
            case 'BACKGROUND':
                var adjustment = this.compileAdjustments(statement[1]);
                this.background = this.adjustColor([0, 0, 1, 1], adjustment[1]);
                break;
            case 'SIZE':
                this.clip = true;
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
                var rule = {
                    weight: statement[2],
                    replacements: statement[3].map(this.compileReplacement, this)
                };
                if (this.rules[statement[1]] != null) {
                    this.rules[statement[1]].push(rule);
                } else {
                    this.rules[statement[1]] = [rule];
                }
                break;
            case 'PATH':
                this.primitives[statement[1]] = this.compilePath(statement[2]);
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

    var n = 0;
    Object.keys(this.primitives).forEach(function(primitive) {
        this.rules[primitive] = [{
            replacements: [function(transform, color) {
                var area = Math.abs(transform[0] * transform[3] - transform[1] * transform[2]);
                if (area * this.scale * this.scale < 0.3) return;

                var shape = {
                    type: primitive,
                    transform: transform,
                    color: color,
                    area: area
                };
                this.shapes.push(shape);

                if (!this.clip) {
                    var size = Math.sqrt(area);
                    if (this.left > (shape.left = transform[4] - size)) {
                        this.left = shape.left;
                    }
                    if (this.right < (shape.right = transform[4] + size)) {
                        this.right = shape.right;
                    }
                    if (this.top > (shape.top = transform[5] - size)) {
                        this.top = shape.top;
                    }
                    if (this.bottom < (shape.bottom = transform[5] + size)) {
                        this.bottom = shape.bottom;
                    }

                    if (this.width < this.right - this.left ||
                        this.height < this.bottom - this.top) {
                        this.width = this.right - this.left;
                        this.height = this.bottom - this.top;
                        this.scale = Math.min(
                            this.canvas.width / this.width,
                            this.canvas.height / this.height
                        );
                        if (n++ > 100 && this.queue.length > 1000) {
                            n = 0;
                            this.shapes = this.shapes.filter(function(shape) {
                                return shape.area * this.scale * this.scale > 0.3;
                            }, this);
                        }
                    }
                }
            }],
            probability: 1
        }];
    }, this);

    if (this.clip) {
        this.scale = Math.min(
            canvas.width / this.width,
            canvas.height / this.height
        );
    }

    if (!this.startshape) {
        throw new Error('startshape is not defined');
    } else if (!this.rules[this.startshape]) {
        throw new Error('rule \'' + this.startshape + '\' is not defined');
    }
};

ContextFree.prototype.loop = function(loop, callback) {
    if (this.intervalID) {
        window.clearInterval(this.intervalID);
    }

    var that = this;
    var intervalID = this.intervalID = window.setInterval(function() {
        var c = true;
        var start = Date.now();
        do {
            var n = 1000;
            while (--n && c) {
                c = loop.call(that);
            }
        } while (Date.now() - start < 30 && c);

        if (!c) {
            window.clearInterval(intervalID)
            callback.call(that);
        }
    }, 30);
};

ContextFree.prototype.stop = function() {
    if (this.intervalID) {
        window.clearInterval(this.intervalID);
        this.intervalID = null;
        if (this.callback) {
            this.callback.call(null);
            this.callback = null;
        }
    }
};

ContextFree.prototype.render = function(callback) {
    this.callback = callback;

    this.context.setTransform(1, 0, 0, 1, 0, 0);
    if (this.background) {
        this.context.fillStyle = 'rgba(' + hsv2rgb.apply(null, this.background) + ')';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } else {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.expandShape();
};

ContextFree.prototype.expandShape = function() {
    this.shapes = [];
    this.queue = this.getRule(this.startshape).map(function(replacement) {
        return function() { replacement.call(this, [1, 0, 0, 1, 0, 0], [0, 0, 0, 1]); };
    });

    this.loop(function() {
        if (this.queue.length) {
            this.queue.pop().call(this);
        }
        return this.queue.length;
    }, this.drawShape);
};

ContextFree.prototype.drawShape = function() {
    this.shapes.sort(function(a, b) { return a.area - b.area; });
    var i = 0, len = this.shapes.length;
    while (i < len && this.shapes[i].area * this.scale * this.scale < 0.3) i++;
    this.shapes.splice(0, i);

    if (!this.clip) {
        this.left = this.right = 0;
        this.top = this.bottom = 0;
        this.shapes.forEach(function(shape) {
            if (this.left > shape.left) this.left = shape.left;
            if (this.right < shape.right) this.right = shape.right;
            if (this.top > shape.top) this.top = shape.top;
            if (this.bottom < shape.bottom) this.bottom = shape.bottom;
        }, this);
        this.x = -(this.left + this.right) / 2;
        this.y = -(this.top + this.bottom) / 2;
    }
    this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
    this.context.scale(this.scale, -this.scale);
    this.context.translate(this.x, this.y);

    this.loop(function() {
        if (this.shapes.length) {
            var shape = this.shapes.pop();
            this.context.save();
            this.context.transform.apply(this.context, shape.transform);
            this.context.fillStyle = 'rgba(' + hsv2rgb.apply(null, shape.color).join() + ')';
            this.primitives[shape.type].call(this);
            this.context.restore();
        }
        return this.shapes.length;
    }, this.stop);
};

ContextFree.prototype.getRule = function(id) {
    var rules = this.rules[id];
    if (rules == null) {
        this.stop();
        throw new Error('rule \'' + id + '\' is not defined');
    }
    if (rules.length == 1) {
        return rules[0].replacements;
    } else {
        var p = 0, r = Math.random();
        for (var i = 0, len = rules.length; i < len; i++) {
            p += rules[i].probability;
            if (r < p) return rules[i].replacements;
        }
    }
};

ContextFree.prototype.compileReplacement = function(replacement) {
    var adjustments = this.compileAdjustments(replacement[2]);
    var geomAdj  = adjustments[0];
    var colorAdj = adjustments[1];

    if (replacement[0] == 'REPLACEMENT') {
        return function(transform, color) {
            var area = Math.abs(transform[0] * transform[3] - transform[1] * transform[2]);
            if (area * this.scale * this.scale < 0.3) return;

            transform = this.adjustTransform(transform, geomAdj);
            color = this.adjustColor(color, colorAdj);

            [].push.apply(this.queue, this.getRule(replacement[1]).map(function(replacement) {
                return function() { replacement.call(this, transform, color); };
            }));
        };
    }
    
    if (replacement[0] == 'REPLACEMENT_LOOP') {
        var replacements = replacement[3].map(this.compileReplacement, this);
        return function(transform, color) {
            var area = Math.abs(transform[0] * transform[3] - transform[1] * transform[2]);
            if (area * this.scale * this.scale < 0.3) return;

            var n = replacement[1];
            for (;;) {
                (function(transform, color) {
                    [].push.apply(this.queue, replacements.map(function(replacement) {
                        return function() { replacement.call(this, transform, color); };
                    }));
                }).call(this, transform, color);

                if (!(--n)) break;

                transform = this.adjustTransform(transform, geomAdj);
                color = this.adjustColor(color, colorAdj);
            }
        };
    }
};

ContextFree.prototype.compilePath = function(path) {
};

ContextFree.prototype.compileAdjustments = function(adjustments) {
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
    var color = [0, 0, 0, 0];
    adjustments.forEach(function(adjustment) {
        var c, s, t;
        switch (adjustment[0]) {
            case 'XSHIFT':
                transform[4] += transform[0] * adjustment[1];
                transform[5] += transform[1] * adjustment[1];
                break;
            case 'YSHIFT':
                transform[4] += transform[2] * adjustment[1];
                transform[5] += transform[3] * adjustment[1];
                break;
            case 'ROTATE':
                c =  Math.cos(Math.PI * adjustment[1] / 180);
                s = -Math.sin(Math.PI * adjustment[1] / 180);
                t = transform.slice(0, 4);
                transform[0] = t[0] * c - t[2] * s;
                transform[1] = t[1] * c - t[3] * s;
                transform[2] = t[0] * s + t[2] * c;
                transform[3] = t[1] * s + t[3] * c;
                break;
            case 'SIZE':
                transform[0] *= adjustment[1];
                transform[1] *= adjustment[1];
                transform[2] *= adjustment[2];
                transform[3] *= adjustment[2];
                break;
            case 'SKEW':
                c = Math.tan(Math.PI * adjustment[1] / 180);
                s = Math.tan(Math.PI * adjustment[2] / 180);
                t = transform.slice(0, 4);
                transform[0] += t[1] * s;
                transform[1] += t[3] * s;
                transform[2] += t[0] * c;
                transform[3] += t[2] * c;
                break;
            case 'FLIP':
                c = Math.cos(Math.PI * adjustment[1] / 90);
                s = Math.sin(Math.PI * adjustment[1] / 90);
                t = transform.slice(0, 4);
                transform[0] = t[0] * c + t[2] * s;
                transform[1] = t[1] * c + t[3] * s;
                transform[2] = t[0] * s - t[2] * c;
                transform[3] = t[1] * s - t[3] * c;
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
    }, this);

    return [transform, color];
};

ContextFree.prototype.adjustTransform  = function(transform, adj) {
    return [
        transform[0] * adj[0] + transform[2] * adj[1],
        transform[1] * adj[0] + transform[3] * adj[1],
        transform[0] * adj[2] + transform[2] * adj[3],
        transform[1] * adj[2] + transform[3] * adj[3],
        transform[0] * adj[4] + transform[2] * adj[5] + transform[4],
        transform[1] * adj[4] + transform[3] * adj[5] + transform[5]
    ];
};

ContextFree.prototype.adjustColor = function(color, colorAdj) {
    color = color.slice();
    if (colorAdj[0] != 0) {
        color[0] += colorAdj[0];
        color[0] %= 360;
    }
    for (var i = 1; i < 4; i++) {
        var a = colorAdj[i];
        if (a > 0) {
            color[i] += (1-color[i]) * a;
        } else if (a < 0) {
            color[i] += color[i] * a;
        }
    }
    return color;
};

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
                r = Math.round(v * (1 - s * h + s * hi));
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
                g = Math.round(v * (1 - s * h + s * hi));
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
                b = Math.round(v * (1 - s * h + s * hi));
                break;
        }
    }
    return [r, g, b, a];
}

})();
