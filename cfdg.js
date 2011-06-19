/* Jison generated parser */
var CFDG = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"contextfree":3,"statements":4,"EOF":5,"statement":6,"startshape":7,"background":8,"size":9,"rule":10,"STARTSHAPE":11,"id":12,"BACKGROUND":13,"{":14,"color_adjustments":15,"}":16,"SIZE":17,"modification":18,"RULE":19,"replacements":20,"n":21,"replacement_loop":22,"replacement":23,"*":24,"adjustments":25,"[":26,"]":27,"adjustment":28,"color_adjustment":29,"geom_adjustment":30,"XSHIFT":31,"num":32,"YSHIFT":33,"ZSHIFT":34,"ROTATE":35,"SKEW":36,"FLIP":37,"HUE":38,"SATURATION":39,"BRIGHTNESS":40,"ALPHA":41,"|":42,"TARGETHUE":43,"TARGETSATURATION":44,"TARGETBRIGHTNESS":45,"TARGETALPHA":46,"+":47,"-":48,"(":49,"e":50,")":51,"function":52,"/":53,"^":54,",":55,"NUMBER":56,"STRING":57,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:"STARTSHAPE",13:"BACKGROUND",14:"{",16:"}",17:"SIZE",19:"RULE",24:"*",26:"[",27:"]",31:"XSHIFT",33:"YSHIFT",34:"ZSHIFT",35:"ROTATE",36:"SKEW",37:"FLIP",38:"HUE",39:"SATURATION",40:"BRIGHTNESS",41:"ALPHA",42:"|",43:"TARGETHUE",44:"TARGETSATURATION",45:"TARGETBRIGHTNESS",46:"TARGETALPHA",47:"+",48:"-",49:"(",51:")",53:"/",54:"^",55:",",56:"NUMBER",57:"STRING"},
productions_: [0,[3,2],[4,2],[4,0],[6,1],[6,1],[6,1],[6,1],[7,2],[8,4],[9,2],[10,5],[10,6],[20,2],[20,0],[22,1],[22,4],[22,6],[23,2],[18,3],[18,3],[25,2],[25,0],[15,2],[15,0],[28,1],[28,1],[30,2],[30,2],[30,2],[30,2],[30,2],[30,3],[30,4],[30,3],[30,2],[29,2],[29,2],[29,2],[29,2],[29,3],[29,3],[29,3],[29,3],[29,2],[29,2],[29,2],[29,2],[32,1],[32,2],[32,2],[32,3],[32,1],[50,1],[50,3],[50,3],[50,3],[50,3],[50,3],[50,2],[50,2],[50,3],[50,1],[52,3],[52,4],[52,6],[21,1],[12,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: this.$ = $$[$0-1]; return this.$; 
break;
case 2: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 3: this.$ = []; 
break;
case 8: this.$ = ['STARTSHAPE', $$[$0]]; 
break;
case 9: this.$ = ['BACKGROUND', $$[$0-1]]; 
break;
case 10: this.$ = ['SIZE', $$[$0]]; 
break;
case 11: this.$ = ['RULE', $$[$0-3], 1, $$[$0-1]]; 
break;
case 12: this.$ = ['RULE', $$[$0-4], $$[$0-3], $$[$0-1]]; 
break;
case 13: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 14: this.$ = []; 
break;
case 16: this.$ = ['REPLACEMENT_LOOP', $$[$0-3], $$[$0-1], [$$[$0]]]; 
break;
case 17: this.$ = ['REPLACEMENT_LOOP', $$[$0-5], $$[$0-3], $$[$0-1]]; 
break;
case 18: this.$ = ['REPLACEMENT', $$[$0-1], $$[$0]]; 
break;
case 19: this.$ = $$[$0-1]; 
break;
case 20: this.$ = $$[$0-1]; this.$.push(true); 
break;
case 21: this.$ = $$[$0-1]; this.$[1].push($$[$0]); 
break;
case 22: this.$ = ['ADJUSTMENTS', []]; 
break;
case 23: this.$ = $$[$0-1]; this.$[1].push($$[$0]); 
break;
case 24: this.$ = ['ADJUSTMENTS', []]; 
break;
case 27: this.$ = ['XSHIFT', $$[$0]]; 
break;
case 28: this.$ = ['YSHIFT', $$[$0]]; 
break;
case 29: this.$ = ['ZSHIFT', $$[$0]]; 
break;
case 30: this.$ = ['ROTATE', $$[$0]]; 
break;
case 31: this.$ = ['SIZE', $$[$0], $$[$0], 1]; 
break;
case 32: this.$ = ['SIZE', $$[$0-1], $$[$0], 1]; 
break;
case 33: this.$ = ['SIZE', $$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 34: this.$ = ['SKEW', $$[$0-1], $$[$0]]; 
break;
case 35: this.$ = ['FLIP', $$[$0]]; 
break;
case 36: this.$ = ['HUE', $$[$0]]; 
break;
case 37: this.$ = ['SATURATION', $$[$0]]; 
break;
case 38: this.$ = ['BRIGHTNESS', $$[$0]]; 
break;
case 39: this.$ = ['ALPHA', $$[$0]]; 
break;
case 40: this.$ = ['HUE', $$[$0-1], true]; 
break;
case 41: this.$ = ['SATURATION', $$[$0-1], true]; 
break;
case 42: this.$ = ['BRIGHTNESS', $$[$0-1], true]; 
break;
case 43: this.$ = ['ALPHA', $$[$0-1], true]; 
break;
case 44: this.$ = ['TARGETHUE', $$[$0]]; 
break;
case 45: this.$ = ['TARGETSATURATION', $$[$0]]; 
break;
case 46: this.$ = ['TARGETBRIGHTNESS', $$[$0]]; 
break;
case 47: this.$ = ['TARGETALPHA', $$[$0]]; 
break;
case 49: this.$ = $$[$0]; 
break;
case 50: this.$ = -$$[$0]; 
break;
case 51: this.$ = $$[$0-1]; 
break;
case 54: this.$ = $$[$0-2] + $$[$0]; 
break;
case 55: this.$ = $$[$0-2] - $$[$0]; 
break;
case 56: this.$ = $$[$0-2] * $$[$0]; 
break;
case 57: this.$ = $$[$0-2] / $$[$0]; 
break;
case 58: this.$ = Math.pow($$[$0-2], $$[$0]); 
break;
case 59: this.$ = $$[$0]; 
break;
case 60: this.$ = -$$[$0]; 
break;
case 61: this.$ = $$[$0-1]; 
break;
case 63:
            switch ($$[$0-2]) {
                case 'rand_static':
                    this.$ = yy.rand_static;
                    break;
                default:
                    throw new Error('function \'' + $$[$0-2] + '\' is not defined');
            }
        
break;
case 64:
            switch ($$[$0-3]) {
                case 'cos':
                case 'sin':
                case 'tan':
                    this.$ = Math[$$[$0-3]]($$[$0-1] * Math.PI / 180);
                    break;
                case 'acos':
                case 'asin':
                case 'atan':
                    this.$ = Math[$$[$0-3]]($$[$0-1]) / Math.PI * 180;
                    break;
                case 'log':
                case 'exp':
                case 'sqrt':
                case 'abs':
                    this.$ = Math[$$[$0-3]]($$[$0-1]);
                    break;
                case 'log10':
                    this.$ = Math.log($$[$0-1]) * Math.LOG10E;
                    break;
                case 'rand_static':
                    this.$ = $$[$0-1] * yy.rand_static;
                    break;
                default:
                    throw new Error('function \'' + $$[$0-3] + '\' is not defined');
            }
        
break;
case 65:
            switch ($$[$0-5]) {
                case 'atan2':
                    this.$ = Math.atan2($$[$0-3], $$[$0-1]) / Math.PI * 180;
                    break;
                case 'mod':
                    this.$ = $$[$0-3] % $$[$0-1];
                    break;
                case 'rand_static':
                    this.$ = Math.min($$[$0-3], $$[$0-1]) + Math.abs($$[$0-3] - $$[$0-1]) * yy.rand_static;
                    break;
                default:
                    throw new Error('function \'' + $$[$0-5] + '\' is not defined');
            }
        
break;
case 66: this.$ = parseFloat(yytext); 
break;
case 67: this.$ = yytext; 
break;
}
},
table: [{3:1,4:2,5:[2,3],11:[2,3],13:[2,3],17:[2,3],19:[2,3]},{1:[3]},{5:[1,3],6:4,7:5,8:6,9:7,10:8,11:[1,9],13:[1,10],17:[1,11],19:[1,12]},{1:[2,1]},{5:[2,2],11:[2,2],13:[2,2],17:[2,2],19:[2,2]},{5:[2,4],11:[2,4],13:[2,4],17:[2,4],19:[2,4]},{5:[2,5],11:[2,5],13:[2,5],17:[2,5],19:[2,5]},{5:[2,6],11:[2,6],13:[2,6],17:[2,6],19:[2,6]},{5:[2,7],11:[2,7],13:[2,7],17:[2,7],19:[2,7]},{12:13,57:[1,14]},{14:[1,15]},{14:[1,17],18:16,26:[1,18]},{12:19,57:[1,14]},{5:[2,8],11:[2,8],13:[2,8],17:[2,8],19:[2,8]},{5:[2,67],11:[2,67],13:[2,67],14:[2,67],17:[2,67],19:[2,67],26:[2,67],49:[2,67],56:[2,67]},{15:20,16:[2,24],38:[2,24],39:[2,24],40:[2,24],41:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24]},{5:[2,10],11:[2,10],13:[2,10],17:[2,10],19:[2,10]},{16:[2,22],17:[2,22],25:21,31:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22],37:[2,22],38:[2,22],39:[2,22],40:[2,22],41:[2,22],43:[2,22],44:[2,22],45:[2,22],46:[2,22]},{17:[2,22],25:22,27:[2,22],31:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22],37:[2,22],38:[2,22],39:[2,22],40:[2,22],41:[2,22],43:[2,22],44:[2,22],45:[2,22],46:[2,22]},{14:[1,23],21:24,56:[1,25]},{16:[1,26],29:27,38:[1,28],39:[1,29],40:[1,30],41:[1,31],43:[1,32],44:[1,33],45:[1,34],46:[1,35]},{16:[1,36],17:[1,44],28:37,29:39,30:38,31:[1,40],33:[1,41],34:[1,42],35:[1,43],36:[1,45],37:[1,46],38:[1,28],39:[1,29],40:[1,30],41:[1,31],43:[1,32],44:[1,33],45:[1,34],46:[1,35]},{17:[1,44],27:[1,47],28:37,29:39,30:38,31:[1,40],33:[1,41],34:[1,42],35:[1,43],36:[1,45],37:[1,46],38:[1,28],39:[1,29],40:[1,30],41:[1,31],43:[1,32],44:[1,33],45:[1,34],46:[1,35]},{16:[2,14],20:48,56:[2,14],57:[2,14]},{14:[1,49]},{14:[2,66],16:[2,66],17:[2,66],24:[2,66],27:[2,66],31:[2,66],33:[2,66],34:[2,66],35:[2,66],36:[2,66],37:[2,66],38:[2,66],39:[2,66],40:[2,66],41:[2,66],42:[2,66],43:[2,66],44:[2,66],45:[2,66],46:[2,66],47:[2,66],48:[2,66],49:[2,66],51:[2,66],53:[2,66],54:[2,66],55:[2,66],56:[2,66],57:[2,66]},{5:[2,9],11:[2,9],13:[2,9],17:[2,9],19:[2,9]},{16:[2,23],38:[2,23],39:[2,23],40:[2,23],41:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23]},{12:56,21:51,32:50,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:57,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:58,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:59,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:60,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:61,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:62,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:63,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{5:[2,19],11:[2,19],13:[2,19],14:[2,19],16:[2,19],17:[2,19],19:[2,19],56:[2,19],57:[2,19]},{16:[2,21],17:[2,21],27:[2,21],31:[2,21],33:[2,21],34:[2,21],35:[2,21],36:[2,21],37:[2,21],38:[2,21],39:[2,21],40:[2,21],41:[2,21],43:[2,21],44:[2,21],45:[2,21],46:[2,21]},{16:[2,25],17:[2,25],27:[2,25],31:[2,25],33:[2,25],34:[2,25],35:[2,25],36:[2,25],37:[2,25],38:[2,25],39:[2,25],40:[2,25],41:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25]},{16:[2,26],17:[2,26],27:[2,26],31:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],37:[2,26],38:[2,26],39:[2,26],40:[2,26],41:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26]},{12:56,21:51,32:64,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:65,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:66,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:67,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:68,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:69,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:70,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{5:[2,20],11:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],19:[2,20],56:[2,20],57:[2,20]},{12:75,16:[1,71],21:74,22:72,23:73,56:[1,25],57:[1,14]},{16:[2,14],20:76,56:[2,14],57:[2,14]},{16:[2,36],17:[2,36],27:[2,36],31:[2,36],33:[2,36],34:[2,36],35:[2,36],36:[2,36],37:[2,36],38:[2,36],39:[2,36],40:[2,36],41:[2,36],42:[1,77],43:[2,36],44:[2,36],45:[2,36],46:[2,36]},{16:[2,48],17:[2,48],27:[2,48],31:[2,48],33:[2,48],34:[2,48],35:[2,48],36:[2,48],37:[2,48],38:[2,48],39:[2,48],40:[2,48],41:[2,48],42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],47:[2,48],48:[2,48],49:[2,48],56:[2,48],57:[2,48]},{21:78,56:[1,25]},{21:79,56:[1,25]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:80,52:85,56:[1,25],57:[1,14]},{16:[2,52],17:[2,52],27:[2,52],31:[2,52],33:[2,52],34:[2,52],35:[2,52],36:[2,52],37:[2,52],38:[2,52],39:[2,52],40:[2,52],41:[2,52],42:[2,52],43:[2,52],44:[2,52],45:[2,52],46:[2,52],47:[2,52],48:[2,52],49:[2,52],56:[2,52],57:[2,52]},{49:[1,86]},{16:[2,37],17:[2,37],27:[2,37],31:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],37:[2,37],38:[2,37],39:[2,37],40:[2,37],41:[2,37],42:[1,87],43:[2,37],44:[2,37],45:[2,37],46:[2,37]},{16:[2,38],17:[2,38],27:[2,38],31:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],37:[2,38],38:[2,38],39:[2,38],40:[2,38],41:[2,38],42:[1,88],43:[2,38],44:[2,38],45:[2,38],46:[2,38]},{16:[2,39],17:[2,39],27:[2,39],31:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],37:[2,39],38:[2,39],39:[2,39],40:[2,39],41:[2,39],42:[1,89],43:[2,39],44:[2,39],45:[2,39],46:[2,39]},{16:[2,44],17:[2,44],27:[2,44],31:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],37:[2,44],38:[2,44],39:[2,44],40:[2,44],41:[2,44],43:[2,44],44:[2,44],45:[2,44],46:[2,44]},{16:[2,45],17:[2,45],27:[2,45],31:[2,45],33:[2,45],34:[2,45],35:[2,45],36:[2,45],37:[2,45],38:[2,45],39:[2,45],40:[2,45],41:[2,45],43:[2,45],44:[2,45],45:[2,45],46:[2,45]},{16:[2,46],17:[2,46],27:[2,46],31:[2,46],33:[2,46],34:[2,46],35:[2,46],36:[2,46],37:[2,46],38:[2,46],39:[2,46],40:[2,46],41:[2,46],43:[2,46],44:[2,46],45:[2,46],46:[2,46]},{16:[2,47],17:[2,47],27:[2,47],31:[2,47],33:[2,47],34:[2,47],35:[2,47],36:[2,47],37:[2,47],38:[2,47],39:[2,47],40:[2,47],41:[2,47],43:[2,47],44:[2,47],45:[2,47],46:[2,47]},{16:[2,27],17:[2,27],27:[2,27],31:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],37:[2,27],38:[2,27],39:[2,27],40:[2,27],41:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27]},{16:[2,28],17:[2,28],27:[2,28],31:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],37:[2,28],38:[2,28],39:[2,28],40:[2,28],41:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28]},{16:[2,29],17:[2,29],27:[2,29],31:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],37:[2,29],38:[2,29],39:[2,29],40:[2,29],41:[2,29],43:[2,29],44:[2,29],45:[2,29],46:[2,29]},{16:[2,30],17:[2,30],27:[2,30],31:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],37:[2,30],38:[2,30],39:[2,30],40:[2,30],41:[2,30],43:[2,30],44:[2,30],45:[2,30],46:[2,30]},{12:56,16:[2,31],17:[2,31],21:51,27:[2,31],31:[2,31],32:90,33:[2,31],34:[2,31],35:[2,31],36:[2,31],37:[2,31],38:[2,31],39:[2,31],40:[2,31],41:[2,31],43:[2,31],44:[2,31],45:[2,31],46:[2,31],47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{12:56,21:51,32:91,47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{16:[2,35],17:[2,35],27:[2,35],31:[2,35],33:[2,35],34:[2,35],35:[2,35],36:[2,35],37:[2,35],38:[2,35],39:[2,35],40:[2,35],41:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35]},{5:[2,11],11:[2,11],13:[2,11],17:[2,11],19:[2,11]},{16:[2,13],56:[2,13],57:[2,13]},{16:[2,15],56:[2,15],57:[2,15]},{24:[1,92]},{14:[1,17],18:93,26:[1,18]},{12:75,16:[1,94],21:74,22:72,23:73,56:[1,25],57:[1,14]},{16:[2,40],17:[2,40],27:[2,40],31:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],37:[2,40],38:[2,40],39:[2,40],40:[2,40],41:[2,40],43:[2,40],44:[2,40],45:[2,40],46:[2,40]},{16:[2,49],17:[2,49],27:[2,49],31:[2,49],33:[2,49],34:[2,49],35:[2,49],36:[2,49],37:[2,49],38:[2,49],39:[2,49],40:[2,49],41:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],47:[2,49],48:[2,49],49:[2,49],56:[2,49],57:[2,49]},{16:[2,50],17:[2,50],27:[2,50],31:[2,50],33:[2,50],34:[2,50],35:[2,50],36:[2,50],37:[2,50],38:[2,50],39:[2,50],40:[2,50],41:[2,50],42:[2,50],43:[2,50],44:[2,50],45:[2,50],46:[2,50],47:[2,50],48:[2,50],49:[2,50],56:[2,50],57:[2,50]},{24:[1,98],47:[1,96],48:[1,97],51:[1,95],53:[1,99],54:[1,100]},{24:[2,53],47:[2,53],48:[2,53],51:[2,53],53:[2,53],54:[2,53],55:[2,53]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:101,52:85,56:[1,25],57:[1,14]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:102,52:85,56:[1,25],57:[1,14]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:103,52:85,56:[1,25],57:[1,14]},{24:[2,62],47:[2,62],48:[2,62],51:[2,62],53:[2,62],54:[2,62],55:[2,62]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:105,51:[1,104],52:85,56:[1,25],57:[1,14]},{16:[2,41],17:[2,41],27:[2,41],31:[2,41],33:[2,41],34:[2,41],35:[2,41],36:[2,41],37:[2,41],38:[2,41],39:[2,41],40:[2,41],41:[2,41],43:[2,41],44:[2,41],45:[2,41],46:[2,41]},{16:[2,42],17:[2,42],27:[2,42],31:[2,42],33:[2,42],34:[2,42],35:[2,42],36:[2,42],37:[2,42],38:[2,42],39:[2,42],40:[2,42],41:[2,42],43:[2,42],44:[2,42],45:[2,42],46:[2,42]},{16:[2,43],17:[2,43],27:[2,43],31:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],37:[2,43],38:[2,43],39:[2,43],40:[2,43],41:[2,43],43:[2,43],44:[2,43],45:[2,43],46:[2,43]},{12:56,16:[2,32],17:[2,32],21:51,27:[2,32],31:[2,32],32:106,33:[2,32],34:[2,32],35:[2,32],36:[2,32],37:[2,32],38:[2,32],39:[2,32],40:[2,32],41:[2,32],43:[2,32],44:[2,32],45:[2,32],46:[2,32],47:[1,52],48:[1,53],49:[1,54],52:55,56:[1,25],57:[1,14]},{16:[2,34],17:[2,34],27:[2,34],31:[2,34],33:[2,34],34:[2,34],35:[2,34],36:[2,34],37:[2,34],38:[2,34],39:[2,34],40:[2,34],41:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34]},{14:[1,17],18:107,26:[1,18]},{16:[2,18],56:[2,18],57:[2,18]},{5:[2,12],11:[2,12],13:[2,12],17:[2,12],19:[2,12]},{16:[2,51],17:[2,51],27:[2,51],31:[2,51],33:[2,51],34:[2,51],35:[2,51],36:[2,51],37:[2,51],38:[2,51],39:[2,51],40:[2,51],41:[2,51],42:[2,51],43:[2,51],44:[2,51],45:[2,51],46:[2,51],47:[2,51],48:[2,51],49:[2,51],56:[2,51],57:[2,51]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:108,52:85,56:[1,25],57:[1,14]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:109,52:85,56:[1,25],57:[1,14]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:110,52:85,56:[1,25],57:[1,14]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:111,52:85,56:[1,25],57:[1,14]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:112,52:85,56:[1,25],57:[1,14]},{24:[2,59],47:[2,59],48:[2,59],51:[2,59],53:[2,59],54:[2,59],55:[2,59]},{24:[2,60],47:[2,60],48:[2,60],51:[2,60],53:[2,60],54:[2,60],55:[2,60]},{24:[1,98],47:[1,96],48:[1,97],51:[1,113],53:[1,99],54:[1,100]},{16:[2,63],17:[2,63],24:[2,63],27:[2,63],31:[2,63],33:[2,63],34:[2,63],35:[2,63],36:[2,63],37:[2,63],38:[2,63],39:[2,63],40:[2,63],41:[2,63],42:[2,63],43:[2,63],44:[2,63],45:[2,63],46:[2,63],47:[2,63],48:[2,63],49:[2,63],51:[2,63],53:[2,63],54:[2,63],55:[2,63],56:[2,63],57:[2,63]},{24:[1,98],47:[1,96],48:[1,97],51:[1,114],53:[1,99],54:[1,100],55:[1,115]},{16:[2,33],17:[2,33],27:[2,33],31:[2,33],33:[2,33],34:[2,33],35:[2,33],36:[2,33],37:[2,33],38:[2,33],39:[2,33],40:[2,33],41:[2,33],43:[2,33],44:[2,33],45:[2,33],46:[2,33]},{12:75,14:[1,117],23:116,57:[1,14]},{24:[1,98],47:[2,54],48:[2,54],51:[2,54],53:[1,99],54:[1,100],55:[2,54]},{24:[1,98],47:[2,55],48:[2,55],51:[2,55],53:[1,99],54:[1,100],55:[2,55]},{24:[2,56],47:[2,56],48:[2,56],51:[2,56],53:[2,56],54:[1,100],55:[2,56]},{24:[2,57],47:[2,57],48:[2,57],51:[2,57],53:[2,57],54:[1,100],55:[2,57]},{24:[2,58],47:[2,58],48:[2,58],51:[2,58],53:[2,58],54:[2,58],55:[2,58]},{24:[2,61],47:[2,61],48:[2,61],51:[2,61],53:[2,61],54:[2,61],55:[2,61]},{16:[2,64],17:[2,64],24:[2,64],27:[2,64],31:[2,64],33:[2,64],34:[2,64],35:[2,64],36:[2,64],37:[2,64],38:[2,64],39:[2,64],40:[2,64],41:[2,64],42:[2,64],43:[2,64],44:[2,64],45:[2,64],46:[2,64],47:[2,64],48:[2,64],49:[2,64],51:[2,64],53:[2,64],54:[2,64],55:[2,64],56:[2,64],57:[2,64]},{12:56,21:81,47:[1,82],48:[1,83],49:[1,84],50:118,52:85,56:[1,25],57:[1,14]},{16:[2,16],56:[2,16],57:[2,16]},{16:[2,14],20:119,56:[2,14],57:[2,14]},{24:[1,98],47:[1,96],48:[1,97],51:[1,120],53:[1,99],54:[1,100]},{12:75,16:[1,121],21:74,22:72,23:73,56:[1,25],57:[1,14]},{16:[2,65],17:[2,65],24:[2,65],27:[2,65],31:[2,65],33:[2,65],34:[2,65],35:[2,65],36:[2,65],37:[2,65],38:[2,65],39:[2,65],40:[2,65],41:[2,65],42:[2,65],43:[2,65],44:[2,65],45:[2,65],46:[2,65],47:[2,65],48:[2,65],49:[2,65],51:[2,65],53:[2,65],54:[2,65],55:[2,65],56:[2,65],57:[2,65]},{16:[2,17],56:[2,17],57:[2,17]}],
defaultActions: {3:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip */
break;
case 1:/* ignore comment */
break;
case 2:/* ignore comment */
break;
case 3:return 11;
break;
case 4:return 13;
break;
case 5:return 19;
break;
case 6:return 14;
break;
case 7:return 16;
break;
case 8:return 26;
break;
case 9:return 27;
break;
case 10:return 54;
break;
case 11:return 24;
break;
case 12:return 53;
break;
case 13:return 47;
break;
case 14:return 48;
break;
case 15:return 49;
break;
case 16:return 51;
break;
case 17:return 55;
break;
case 18:return 35;
break;
case 19:return 35;
break;
case 20:return 37;
break;
case 21:return 37;
break;
case 22:return 38;
break;
case 23:return 38;
break;
case 24:return 39;
break;
case 25:return 39;
break;
case 26:return 40;
break;
case 27:return 40;
break;
case 28:return 41;
break;
case 29:return 41;
break;
case 30:return 31;
break;
case 31:return 33;
break;
case 32:return 34;
break;
case 33:return 17;
break;
case 34:return 17;
break;
case 35:return 36;
break;
case 36:return 43;
break;
case 37:return 43;
break;
case 38:return 44;
break;
case 39:return 44;
break;
case 40:return 45;
break;
case 41:return 45;
break;
case 42:return 46;
break;
case 43:return 46;
break;
case 44:return 42;
break;
case 45:return 5;
break;
case 46:return 56;
break;
case 47:return 56;
break;
case 48:return 57;
break;
}
};
lexer.rules = [/^\s+/,/^\/\/.*/,/^\/\*[\w\W]*?\*\//,/^startshape\b/,/^background\b/,/^rule\b/,/^\{/,/^\}/,/^\[/,/^\]/,/^\^/,/^\*/,/^\//,/^\+/,/^-/,/^\(/,/^\)/,/^,/,/^rotate\b/,/^r\b/,/^flip\b/,/^f\b/,/^hue\b/,/^h\b/,/^saturation\b/,/^sat\b/,/^brightness\b/,/^b\b/,/^alpha\b/,/^a\b/,/^x\b/,/^y\b/,/^z\b/,/^size\b/,/^s\b/,/^skew\b/,/^\|hue\b/,/^\|h\b/,/^\|saturation\b/,/^\|sat\b/,/^\|brightness\b/,/^\|b\b/,/^\|alpha\b/,/^\|a\b/,/^\|/,/^$/,/^[0-9]+(\.[0-9]*)?/,/^\.[0-9]+/,/^[a-zA-Z_]+[a-zA-Z0-9_]*/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();