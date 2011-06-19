/*
 * contextfree.js v0.1.0
 *
 * Copyright (c) 2011 alpicola
 * Licensed under the MIT license
 */

var ContextFree = (function() {

'use strict';

function ContextFree(source, canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.x = this.y = 0;
    this.left = this.top = 0;
    this.right = this.bottom = 0;
    this.width = this.height = 1;
    this.scale = Math.min(canvas.width, canvas.height);
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
        TRIANGLE: function() {
            this.context.beginPath();
            this.context.moveTo(0, 0.57735);
            this.context.lineTo(-0.5, -0.28828);
            this.context.lineTo(0.5, -0.28828);
            this.context.closePath();
            this.context.fill();
        }
    };

    CFDG.yy.rand_static = Math.random();
    CFDG.parse(source).forEach(function(statement) {
        switch (statement[0]) {
            case 'STARTSHAPE':
                this.startshape = statement[1];
                break;
            case 'BACKGROUND':
                var adjustment = this.compileAdjustment(statement[1]);
                this.background = this.adjustColor([0, 0, 1, 1], adjustment.color);
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
                    replacements: statement[3]
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

    var n = 0;
    for (var name in this.primitives) (function() {
        var render = this.primitives[name];
        this.rules[name] = [{
            replacements: [function(transform, color, targetColor, z, zScale) {
                var area = Math.abs(transform[0] * transform[3] - transform[1] * transform[2]);
                if (area * this.scale * this.scale < 0.3) return;

                var shape = {
                    render: render,
                    transform: transform,
                    color: color,
                    area: area,
                    z: z
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
    }).call(this);

    for (var name in this.rules) {
        if (name in this.primitives) continue;

        var sum = this.rules[name].reduce(function(sum, rule) {
            return sum + rule.weight
        }, 0);
        this.rules[name].forEach(function(rule) {
            rule.probability = rule.weight / sum;
            rule.replacements = rule.replacements.map(this.compileReplacement, this);
        }, this);
    }

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
}

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

ContextFree.prototype.loop = function(loop, callback) {
    if (this.intervalID) {
        window.clearInterval(this.intervalID);
    }

    var c = 0;
    var that = this;
    var intervalID = this.intervalID = window.setInterval(function() {
        var v = true;
        var start = Date.now();
        do {
            var n = 1000;
            while (--n && v) {
                v = loop.call(that);
            }
        } while (Date.now() - start < 30 && v);

        if (!v) {
            window.clearInterval(intervalID)
            callback.call(that);
        } else if (c++ > 3000) {
            window.clearInterval(intervalID)
            throw new Error('too much shapes');
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

ContextFree.prototype.expandShape = function() {
    var modification = [
        [1, 0, 0, 1, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        0, 1
    ];
    var startshape = this.compileReplacement([
        'REPLACEMENT', this.startshape, ['ADJUSTMENTS', []]
    ]);
    this.queue = [function() { startshape.apply(this, modification); }]
    this.shapes = [];

    this.loop(function() {
        if (this.queue.length) {
            this.queue.pop().call(this);
        }
        return this.queue.length;
    }, this.drawShape);
};

ContextFree.prototype.drawShape = function() {
    this.shapes.sort(function(a, b) { return b.z - a.z || a.area - b.area; });
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
            this.context.fillStyle = 'rgba(' + hsv2rgb.apply(null, shape.color) + ')';
            shape.render.call(this);
            this.context.restore();
        }
        return this.shapes.length;
    }, this.stop);
};

ContextFree.prototype.compileReplacement = function(replacement) {
    var adjustment = this.compileAdjustment(replacement[2]);

    if (replacement[0] == 'REPLACEMENT') {
        var rules = this.rules[replacement[1]];
        if (rules == null) {
            throw new Error('rule \'' + replacement[1] + '\' is not defined');
        }
        return function(transform, color, targetColor, z, zScale) {
            var area = Math.abs(transform[0] * transform[3] - transform[1] * transform[2]);
            if (area * this.scale * this.scale < 0.3) return;

            transform = this.adjustTransform(transform, adjustment.transform);
            if (adjustment.color.length) {
                color = this.adjustColor(color, adjustment.color, targetColor);
            }
            if (adjustment.targetColor.length) {
                targetColor = this.adjustColor(targetColor, adjustment.targetColor);
            }
            z += adjustment.z * zScale;
            zScale *= adjustment.zScale;

            var rule;
            if (rules.length > 1) {
                var p = 0, r = Math.random();
                for (var i = 0, len = rules.length; i < len; i++) {
                    p += rules[i].probability;
                    if (r < p) {
                        rule = rules[i];
                        break;
                    }
                }
            } else {
                rule = rules[0];
            }

            var modification = [transform, color, targetColor, z, zScale];
            [].push.apply(this.queue, rule.replacements.map(function(replacement) {
                return function() { replacement.apply(this, modification); };
            }));
        };
    }
    
    if (replacement[0] == 'REPLACEMENT_LOOP') {
        var replacements = replacement[3].map(this.compileReplacement, this);
        return function(transform, color, targetColor, z, zScale) {
            var area = Math.abs(transform[0] * transform[3] - transform[1] * transform[2]);
            if (area * this.scale * this.scale < 0.3) return;

            var n = replacement[1];
            while (n--) (function() {
                var modification = [transform, color, targetColor, z, zScale];
                [].push.apply(this.queue, replacements.map(function(replacement) {
                    return function() { replacement.apply(this, modification); };
                }));

                if (!n) return; 

                transform = this.adjustTransform(transform, adjustment.transform);
                if (adjustment.color.length) {
                    color = this.adjustColor(color, adjustment.color, targetColor);
                }
                if (adjustment.targetColor.length) {
                    targetColor = this.adjustColor(targetColor, adjustment.targetColor);
                }
                z += adjustment.z * zScale;
                zScale *= adjustment.zScale;
            }).call(this);
        };
    }
};

ContextFree.prototype.compilePath = function(path) {
};

ContextFree.prototype.compileAdjustment = function(adjustments) {
    var geomAdjustments = ['XSHIFT', 'YSHIFT', 'ZSHIFT', 'ROTATE', 'SIZE', 'SKEW', 'FLIP'];
    var colorAdjustments = ['HUE', 'SATURATION', 'BRIGHTNESS', 'ALPHA'];
    var transform = [1, 0, 0, 1, 0, 0];
    var color = [];
    var targetColor = [];
    var z = 0;
    var zScale = 1;

    var orderd = adjustments[2];
    adjustments = adjustments[1].slice();
    adjustments.forEach(function(adjustment) {
        adjustments[adjustment[0]] = adjustment;
    });

    (orderd ? adjustments : geomAdjustments.reduce(function(result, type) {
        if (type in adjustments) result.push(adjustments[type]);
        return result;
    }, [])).forEach(function(adjustment) {
        var x, y, c, s;
        switch (adjustment[0]) {
            case 'XSHIFT':
                x = adjustment[1];
                transform = this.adjustTransform(transform, [1, 0, 0, 1, x, 0]); 
                break;
            case 'YSHIFT':
                y = adjustment[1];
                transform = this.adjustTransform(transform, [1, 0, 0, 1, 0, y]); 
                break;
            case 'ZSHIFT':
                z += adjustment[1];
                break;
            case 'ROTATE':
                c = Math.cos(Math.PI * adjustment[1] / 180);
                s = Math.sin(Math.PI * adjustment[1] / 180);
                transform = this.adjustTransform(transform, [c, s, -s, c, 0, 0]); 
                break;
            case 'SIZE':
                x = adjustment[1];
                y = adjustment[2];
                transform = this.adjustTransform(transform, [x, 0, 0, y, 0, 0]); 
                zScale *= adjustment[3];
                break;
            case 'SKEW':
                x = Math.tan(Math.PI * adjustment[1] / 180);
                y = Math.tan(Math.PI * adjustment[2] / 180);
                transform = this.adjustTransform(transform, [1, y, x, 1, 0, 0]); 
                break;
            case 'FLIP':
                c = Math.cos(Math.PI * adjustment[1] / 90);
                s = Math.sin(Math.PI * adjustment[1] / 90);
                transform = this.adjustTransform(transform, [c, s, s, -c, 0, 0]); 
                break;
        }
    }, this);

    colorAdjustments.forEach(function(type, i) {
        var adjustment;
        if (adjustment = adjustments[type]) {
            color[i] = adjustment[1];
            if (adjustment[2]) color[4] |= (1 << i);
        }
        if (adjustment = adjustments['TARGET' + type]) {
            targetColor[i] = adjustment[1];
        }
    });

    return {
        transform: transform,
        color: color,
        targetColor: targetColor,
        z: z,
        zScale: zScale
    };
};

ContextFree.prototype.adjustTransform  = function(transform, adjustment) {
    return [
        transform[0] * adjustment[0] + transform[2] * adjustment[1],
        transform[1] * adjustment[0] + transform[3] * adjustment[1],
        transform[0] * adjustment[2] + transform[2] * adjustment[3],
        transform[1] * adjustment[2] + transform[3] * adjustment[3],
        transform[0] * adjustment[4] + transform[2] * adjustment[5] + transform[4],
        transform[1] * adjustment[4] + transform[3] * adjustment[5] + transform[5]
    ];
};

ContextFree.prototype.adjustColor = function(color, adjustment, target) {
    color = color.slice();
    var a, t;

    if (a = adjustment[0]) {
        if (adjustment[4] & 1) {
            t = target[0];
            if (a > 0) {
                if (t < color[0]) t += 360;
                color[0] += (t - color[0]) * a;
            } else {
                if (t > color[0]) t -= 360;
                color[0] += (color[0] - t) * a;
            }
        } else {
            color[0] += adjustment[0];
        }
        color[0] %= 360;
        if (color[0] < 0) color[0] += 360;
    }

    for (var i = 1; i < 4; i++) {
        if (a = adjustment[i]) {
            if (adjustment[4] & (1 << i)) {
                if (a > 0) {
                    color[i] += (target[i] - color[i]) * a;
                } else {
                    color[i] += (color[i] - (color[i] < target[i] ? 0 : 1)) * a;
                }
            } else {
                if (a > 0) {
                    color[i] += (1 - color[i]) * a;
                } else {
                    color[i] += color[i] * a;
                }
            }
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

return ContextFree;

})();
