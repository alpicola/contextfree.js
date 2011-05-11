/* Jison generated parser */
var CFDG = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"contextfree":3,"statements":4,"EOF":5,"statement":6,"startshape":7,"background":8,"size":9,"rule":10,"STARTSHAPE":11,"id":12,"BACKGROUND":13,"{":14,"color_adjustments":15,"}":16,"SIZE":17,"modification":18,"RULE":19,"replacements":20,"n":21,"replacement_loop":22,"replacement":23,"*":24,"adjustments":25,"[":26,"]":27,"adjustment":28,"color_adjustment":29,"geom_adjustment":30,"XSHIFT":31,"e":32,"YSHIFT":33,"ZSHIFT":34,"ROTATE":35,"SKEW":36,"FLIP":37,"HUE":38,"SATURATION":39,"BRIGHTNESS":40,"ALPHA":41,"+":42,"-":43,"/":44,"^":45,"(":46,")":47,"NUMBER":48,"STRING":49,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:"STARTSHAPE",13:"BACKGROUND",14:"{",16:"}",17:"SIZE",19:"RULE",24:"*",26:"[",27:"]",31:"XSHIFT",33:"YSHIFT",34:"ZSHIFT",35:"ROTATE",36:"SKEW",37:"FLIP",38:"HUE",39:"SATURATION",40:"BRIGHTNESS",41:"ALPHA",42:"+",43:"-",44:"/",45:"^",46:"(",47:")",48:"NUMBER",49:"STRING"},
productions_: [0,[3,2],[4,2],[4,0],[6,1],[6,1],[6,1],[6,1],[7,2],[8,4],[9,2],[10,5],[10,6],[20,2],[20,0],[22,1],[22,4],[22,6],[23,2],[18,3],[18,3],[25,2],[25,0],[15,2],[15,0],[28,1],[28,1],[30,2],[30,2],[30,2],[30,2],[30,2],[30,3],[30,3],[30,2],[29,2],[29,2],[29,2],[29,2],[32,3],[32,3],[32,3],[32,3],[32,3],[32,2],[32,2],[32,3],[32,1],[21,1],[12,1]],
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
case 31: this.$ = ['SIZE', $$[$0], $$[$0]]; 
break;
case 32: this.$ = ['SIZE', $$[$0-1], $$[$0]]; 
break;
case 33: this.$ = ['SKEW', $$[$0-1], $$[$0]]; 
break;
case 34: this.$ = ['FLIP', $$[$0]]; 
break;
case 35: this.$ = ['HUE', $$[$0]]; 
break;
case 36: this.$ = ['SATURATION', $$[$0]]; 
break;
case 37: this.$ = ['BRIGHTNESS', $$[$0]]; 
break;
case 38: this.$ = ['ALPHA', $$[$0]]; 
break;
case 39: this.$ = $$[$0-2] + $$[$0]; 
break;
case 40: this.$ = $$[$0-2] - $$[$0]; 
break;
case 41: this.$ = $$[$0-2] * $$[$0]; 
break;
case 42: this.$ = $$[$0-2] / $$[$0]; 
break;
case 43: this.$ = Math.pow($$[$0-2], $$[$0]); 
break;
case 44: this.$ = $$[$0]; 
break;
case 45: this.$ = -$$[$0]; 
break;
case 46: this.$ = $$[$0-1]; 
break;
case 48: this.$ = parseFloat(yytext); 
break;
case 49: this.$ = yytext; 
break;
}
},
table: [{3:1,4:2,5:[2,3],11:[2,3],13:[2,3],17:[2,3],19:[2,3]},{1:[3]},{5:[1,3],6:4,7:5,8:6,9:7,10:8,11:[1,9],13:[1,10],17:[1,11],19:[1,12]},{1:[2,1]},{5:[2,2],11:[2,2],13:[2,2],17:[2,2],19:[2,2]},{5:[2,4],11:[2,4],13:[2,4],17:[2,4],19:[2,4]},{5:[2,5],11:[2,5],13:[2,5],17:[2,5],19:[2,5]},{5:[2,6],11:[2,6],13:[2,6],17:[2,6],19:[2,6]},{5:[2,7],11:[2,7],13:[2,7],17:[2,7],19:[2,7]},{12:13,49:[1,14]},{14:[1,15]},{14:[1,17],18:16,26:[1,18]},{12:19,49:[1,14]},{5:[2,8],11:[2,8],13:[2,8],17:[2,8],19:[2,8]},{5:[2,49],11:[2,49],13:[2,49],14:[2,49],17:[2,49],19:[2,49],26:[2,49],48:[2,49]},{15:20,16:[2,24],38:[2,24],39:[2,24],40:[2,24],41:[2,24]},{5:[2,10],11:[2,10],13:[2,10],17:[2,10],19:[2,10]},{16:[2,22],17:[2,22],25:21,31:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22],37:[2,22],38:[2,22],39:[2,22],40:[2,22],41:[2,22]},{17:[2,22],25:22,27:[2,22],31:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22],37:[2,22],38:[2,22],39:[2,22],40:[2,22],41:[2,22]},{14:[1,23],21:24,48:[1,25]},{16:[1,26],29:27,38:[1,28],39:[1,29],40:[1,30],41:[1,31]},{16:[1,32],17:[1,40],28:33,29:35,30:34,31:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,41],37:[1,42],38:[1,28],39:[1,29],40:[1,30],41:[1,31]},{17:[1,40],27:[1,43],28:33,29:35,30:34,31:[1,36],33:[1,37],34:[1,38],35:[1,39],36:[1,41],37:[1,42],38:[1,28],39:[1,29],40:[1,30],41:[1,31]},{16:[2,14],20:44,48:[2,14],49:[2,14]},{14:[1,45]},{14:[2,48],16:[2,48],17:[2,48],24:[2,48],27:[2,48],31:[2,48],33:[2,48],34:[2,48],35:[2,48],36:[2,48],37:[2,48],38:[2,48],39:[2,48],40:[2,48],41:[2,48],42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],47:[2,48],48:[2,48]},{5:[2,9],11:[2,9],13:[2,9],17:[2,9],19:[2,9]},{16:[2,23],38:[2,23],39:[2,23],40:[2,23],41:[2,23]},{21:50,32:46,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:51,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:52,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:53,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{5:[2,19],11:[2,19],13:[2,19],14:[2,19],16:[2,19],17:[2,19],19:[2,19],48:[2,19],49:[2,19]},{16:[2,21],17:[2,21],27:[2,21],31:[2,21],33:[2,21],34:[2,21],35:[2,21],36:[2,21],37:[2,21],38:[2,21],39:[2,21],40:[2,21],41:[2,21]},{16:[2,25],17:[2,25],27:[2,25],31:[2,25],33:[2,25],34:[2,25],35:[2,25],36:[2,25],37:[2,25],38:[2,25],39:[2,25],40:[2,25],41:[2,25]},{16:[2,26],17:[2,26],27:[2,26],31:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],37:[2,26],38:[2,26],39:[2,26],40:[2,26],41:[2,26]},{21:50,32:54,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:55,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:56,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:57,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:58,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:59,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:60,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{5:[2,20],11:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],19:[2,20],48:[2,20],49:[2,20]},{12:65,16:[1,61],21:64,22:62,23:63,48:[1,25],49:[1,14]},{16:[2,14],20:66,48:[2,14],49:[2,14]},{16:[2,35],17:[2,35],24:[1,69],27:[2,35],31:[2,35],33:[2,35],34:[2,35],35:[2,35],36:[2,35],37:[2,35],38:[2,35],39:[2,35],40:[2,35],41:[2,35],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{21:50,32:72,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:73,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:74,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{16:[2,47],17:[2,47],24:[2,47],27:[2,47],31:[2,47],33:[2,47],34:[2,47],35:[2,47],36:[2,47],37:[2,47],38:[2,47],39:[2,47],40:[2,47],41:[2,47],42:[2,47],43:[2,47],44:[2,47],45:[2,47],46:[2,47],47:[2,47],48:[2,47]},{16:[2,36],17:[2,36],24:[1,69],27:[2,36],31:[2,36],33:[2,36],34:[2,36],35:[2,36],36:[2,36],37:[2,36],38:[2,36],39:[2,36],40:[2,36],41:[2,36],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{16:[2,37],17:[2,37],24:[1,69],27:[2,37],31:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],37:[2,37],38:[2,37],39:[2,37],40:[2,37],41:[2,37],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{16:[2,38],17:[2,38],24:[1,69],27:[2,38],31:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],37:[2,38],38:[2,38],39:[2,38],40:[2,38],41:[2,38],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{16:[2,27],17:[2,27],24:[1,69],27:[2,27],31:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],37:[2,27],38:[2,27],39:[2,27],40:[2,27],41:[2,27],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{16:[2,28],17:[2,28],24:[1,69],27:[2,28],31:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],37:[2,28],38:[2,28],39:[2,28],40:[2,28],41:[2,28],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{16:[2,29],17:[2,29],24:[1,69],27:[2,29],31:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],37:[2,29],38:[2,29],39:[2,29],40:[2,29],41:[2,29],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{16:[2,30],17:[2,30],24:[1,69],27:[2,30],31:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],37:[2,30],38:[2,30],39:[2,30],40:[2,30],41:[2,30],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{16:[2,31],17:[2,31],21:50,24:[1,69],27:[2,31],31:[2,31],32:75,33:[2,31],34:[2,31],35:[2,31],36:[2,31],37:[2,31],38:[2,31],39:[2,31],40:[2,31],41:[2,31],42:[1,76],43:[1,77],44:[1,70],45:[1,71],46:[1,49],48:[1,25]},{21:50,24:[1,69],32:78,42:[1,76],43:[1,77],44:[1,70],45:[1,71],46:[1,49],48:[1,25]},{16:[2,34],17:[2,34],24:[1,69],27:[2,34],31:[2,34],33:[2,34],34:[2,34],35:[2,34],36:[2,34],37:[2,34],38:[2,34],39:[2,34],40:[2,34],41:[2,34],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{5:[2,11],11:[2,11],13:[2,11],17:[2,11],19:[2,11]},{16:[2,13],48:[2,13],49:[2,13]},{16:[2,15],48:[2,15],49:[2,15]},{24:[1,79]},{14:[1,17],18:80,26:[1,18]},{12:65,16:[1,81],21:64,22:62,23:63,48:[1,25],49:[1,14]},{21:50,32:82,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:83,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:84,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:85,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:86,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{16:[2,44],17:[2,44],24:[2,44],27:[2,44],31:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],37:[2,44],38:[2,44],39:[2,44],40:[2,44],41:[2,44],42:[2,44],43:[2,44],44:[2,44],45:[2,44],46:[2,44],47:[2,44],48:[2,44]},{16:[2,45],17:[2,45],24:[2,45],27:[2,45],31:[2,45],33:[2,45],34:[2,45],35:[2,45],36:[2,45],37:[2,45],38:[2,45],39:[2,45],40:[2,45],41:[2,45],42:[2,45],43:[2,45],44:[2,45],45:[2,45],46:[2,45],47:[2,45],48:[2,45]},{24:[1,69],42:[1,67],43:[1,68],44:[1,70],45:[1,71],47:[1,87]},{16:[2,32],17:[2,32],24:[1,69],27:[2,32],31:[2,32],33:[2,32],34:[2,32],35:[2,32],36:[2,32],37:[2,32],38:[2,32],39:[2,32],40:[2,32],41:[2,32],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{21:50,32:88,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{21:50,32:89,42:[1,47],43:[1,48],46:[1,49],48:[1,25]},{16:[2,33],17:[2,33],24:[1,69],27:[2,33],31:[2,33],33:[2,33],34:[2,33],35:[2,33],36:[2,33],37:[2,33],38:[2,33],39:[2,33],40:[2,33],41:[2,33],42:[1,67],43:[1,68],44:[1,70],45:[1,71]},{14:[1,17],18:90,26:[1,18]},{16:[2,18],48:[2,18],49:[2,18]},{5:[2,12],11:[2,12],13:[2,12],17:[2,12],19:[2,12]},{16:[2,39],17:[2,39],24:[1,69],27:[2,39],31:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],37:[2,39],38:[2,39],39:[2,39],40:[2,39],41:[2,39],42:[2,39],43:[2,39],44:[1,70],45:[1,71],46:[2,39],47:[2,39],48:[2,39]},{16:[2,40],17:[2,40],24:[1,69],27:[2,40],31:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],37:[2,40],38:[2,40],39:[2,40],40:[2,40],41:[2,40],42:[2,40],43:[2,40],44:[1,70],45:[1,71],46:[2,40],47:[2,40],48:[2,40]},{16:[2,41],17:[2,41],24:[2,41],27:[2,41],31:[2,41],33:[2,41],34:[2,41],35:[2,41],36:[2,41],37:[2,41],38:[2,41],39:[2,41],40:[2,41],41:[2,41],42:[2,41],43:[2,41],44:[2,41],45:[1,71],46:[2,41],47:[2,41],48:[2,41]},{16:[2,42],17:[2,42],24:[2,42],27:[2,42],31:[2,42],33:[2,42],34:[2,42],35:[2,42],36:[2,42],37:[2,42],38:[2,42],39:[2,42],40:[2,42],41:[2,42],42:[2,42],43:[2,42],44:[2,42],45:[1,71],46:[2,42],47:[2,42],48:[2,42]},{16:[2,43],17:[2,43],24:[2,43],27:[2,43],31:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],37:[2,43],38:[2,43],39:[2,43],40:[2,43],41:[2,43],42:[2,43],43:[2,43],44:[2,43],45:[2,43],46:[2,43],47:[2,43],48:[2,43]},{16:[2,46],17:[2,46],24:[2,46],27:[2,46],31:[2,46],33:[2,46],34:[2,46],35:[2,46],36:[2,46],37:[2,46],38:[2,46],39:[2,46],40:[2,46],41:[2,46],42:[2,46],43:[2,46],44:[2,46],45:[2,46],46:[2,46],47:[2,46],48:[2,46]},{16:[2,39],17:[2,39],24:[2,44],27:[2,39],31:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],37:[2,39],38:[2,39],39:[2,39],40:[2,39],41:[2,39],42:[2,39],43:[2,39],44:[2,44],45:[2,44],46:[2,39],48:[2,39]},{16:[2,40],17:[2,40],24:[2,45],27:[2,40],31:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],37:[2,40],38:[2,40],39:[2,40],40:[2,40],41:[2,40],42:[2,40],43:[2,40],44:[2,45],45:[2,45],46:[2,40],48:[2,40]},{12:65,14:[1,92],23:91,49:[1,14]},{16:[2,16],48:[2,16],49:[2,16]},{16:[2,14],20:93,48:[2,14],49:[2,14]},{12:65,16:[1,94],21:64,22:62,23:63,48:[1,25],49:[1,14]},{16:[2,17],48:[2,17],49:[2,17]}],
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
case 2:return 11;
break;
case 3:return 13;
break;
case 4:return 19;
break;
case 5:return 14;
break;
case 6:return 16;
break;
case 7:return 26;
break;
case 8:return 27;
break;
case 9:return 45;
break;
case 10:return 24;
break;
case 11:return 44;
break;
case 12:return 42;
break;
case 13:return 43;
break;
case 14:return 46;
break;
case 15:return 47;
break;
case 16:return ',';
break;
case 17:return 35;
break;
case 18:return 35;
break;
case 19:return 37;
break;
case 20:return 37;
break;
case 21:return 38;
break;
case 22:return 38;
break;
case 23:return 39;
break;
case 24:return 39;
break;
case 25:return 40;
break;
case 26:return 40;
break;
case 27:return 41;
break;
case 28:return 41;
break;
case 29:return 31;
break;
case 30:return 33;
break;
case 31:return 34;
break;
case 32:return 17;
break;
case 33:return 17;
break;
case 34:return 36;
break;
case 35:return 'TARGETHUE';
break;
case 36:return 'TARGETHUE';
break;
case 37:return 'TARGETSATURATION';
break;
case 38:return 'TARGETSATURATION';
break;
case 39:return 'TARGETBRIGHTNESS';
break;
case 40:return 'TARGETBRIGHTNESS';
break;
case 41:return 'TARGETALPHA';
break;
case 42:return 'TARGETALPHA';
break;
case 43:return '|';
break;
case 44:return 5;
break;
case 45:return 48;
break;
case 46:return 48;
break;
case 47:return 49;
break;
}
};
lexer.rules = [/^\s+/,/^\/\/.*/,/^startshape\b/,/^background\b/,/^rule\b/,/^\{/,/^\}/,/^\[/,/^\]/,/^\^/,/^\*/,/^\//,/^\+/,/^-/,/^\(/,/^\)/,/^,/,/^rotate\b/,/^r\b/,/^flip\b/,/^f\b/,/^hue\b/,/^h\b/,/^saturation\b/,/^sat\b/,/^brightness\b/,/^b\b/,/^alpha\b/,/^a\b/,/^x\b/,/^y\b/,/^z\b/,/^size\b/,/^s\b/,/^skew\b/,/^\|hue\b/,/^\|h\b/,/^\|saturation\b/,/^\|sat\b/,/^\|brightness\b/,/^\|b\b/,/^\|alpha\b/,/^\|a\b/,/^\|/,/^$/,/^[0-9]+(\.[0-9]*)?/,/^\.[0-9]+/,/^[a-zA-Z_]+[a-zA-Z0-9_]*/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();