%lex
%%

\s+                       /* skip */
"//".*                    /* ignore comment */
"/*"[\w\W]*?"*/"          /* ignore comment */

"startshape"              return 'STARTSHAPE';
"background"              return 'BACKGROUND';
"rule"                    return 'RULE';
"{"                       return '{';
"}"                       return '}';
"["                       return '[';
"]"                       return ']';
"^"                       return '^';
"*"                       return '*';
"/"                       return '/';
"+"                       return '+';
"-"                       return '-';
"("                       return '(';
")"                       return ')';
","                       return ',';
"rotate"                  return 'ROTATE';
"r"                       return 'ROTATE';
"flip"	                  return 'FLIP';
"f"                       return 'FLIP';
"hue"                     return 'HUE';
"h"                       return 'HUE';
"saturation"              return 'SATURATION';
"sat"                     return 'SATURATION';
"brightness"              return 'BRIGHTNESS';
"b"                       return 'BRIGHTNESS';
"alpha"                   return 'ALPHA';
"a"                       return 'ALPHA';
"x"                       return 'XSHIFT';
"y"                       return 'YSHIFT';
"z"                       return 'ZSHIFT';
"size"                    return 'SIZE';
"s"                       return 'SIZE';
"skew"                    return 'SKEW';
"|hue"                    return 'TARGETHUE';
"|h"                      return 'TARGETHUE';
"|saturation"             return 'TARGETSATURATION';
"|sat"                    return 'TARGETSATURATION';
"|brightness"             return 'TARGETBRIGHTNESS';
"|b"                      return 'TARGETBRIGHTNESS';
"|alpha"                  return 'TARGETALPHA';
"|a"                      return 'TARGETALPHA';
"|"                       return '|';
<<EOF>>                   return 'EOF';

[0-9]+("."[0-9]*)?        return 'NUMBER';
"."[0-9]+                 return 'NUMBER';
[a-zA-Z_]+[a-zA-Z0-9_]*   return 'STRING';

/lex

%left '+' '-'
%left '*' '/'
%left '^'
%left NEG POS

%start contextfree

%%

contextfree
    : statements EOF
        { $$ = $1; return $$; }
    ;

statements
    : statements statement
        { $$ = $1; $$.push($2); }
    |
        { $$ = []; }
    ;

statement
    : startshape
    | background
    | size
    | rule
    ;

startshape
    : STARTSHAPE id
        { $$ = ['STARTSHAPE', $2]; }
    ;

background
    : BACKGROUND '{' color_adjustments '}'
        { $$ = ['BACKGROUND', $3]; }
    ;

size
    : SIZE modification
        { $$ = ['SIZE', $2]; }
    ;

rule
    : RULE id '{' replacements '}'
        { $$ = ['RULE', $2, 1, $4]; }
    | RULE id n '{' replacements '}'
        { $$ = ['RULE', $2, $3, $5]; }
    ;

replacements
    : replacements replacement_loop
        { $$ = $1; $$.push($2); }
    |
        { $$ = []; }
    ;

replacement_loop
    : replacement
    | n '*' modification replacement
        { $$ = ['REPLACEMENT_LOOP', $1, $3, [$4]]; }
    | n '*' modification '{' replacements '}'
        { $$ = ['REPLACEMENT_LOOP', $1, $3, $5]; }
    ;

replacement
    : id modification
        { $$ = ['REPLACEMENT', $1, $2]; }
    ;

modification
    : '{' adjustments '}'
        { $$ = $2; }
    | '[' adjustments ']'
        { $$ = $2; $$.push(true); }
    ;

adjustments
    : adjustments adjustment
        { $$ = $1; $$[1].push($2); }
    |
        { $$ = ['ADJUSTMENTS', []]; }
    ;

color_adjustments
    : color_adjustments color_adjustment
        { $$ = $1; $$[1].push($2); }
    |
        { $$ = ['ADJUSTMENTS', []]; }
    ;

adjustment
    : geom_adjustment
    | color_adjustment
    ;

geom_adjustment
    : XSHIFT num
        { $$ = ['XSHIFT', $2]; }
    | YSHIFT num
        { $$ = ['YSHIFT', $2]; }
    | ZSHIFT num
        { $$ = ['ZSHIFT', $2]; }
    | ROTATE num
        { $$ = ['ROTATE', $2]; }
    | SIZE num
        { $$ = ['SIZE', $2, $2, 1]; }
    | SIZE num num
        { $$ = ['SIZE', $2, $3, 1]; }
    | SIZE num num num
        { $$ = ['SIZE', $2, $3, $4]; }
    | SKEW num num
        { $$ = ['SKEW', $2, $3]; }
    | FLIP num
        { $$ = ['FLIP', $2]; }
    ;

color_adjustment
    : HUE num
        { $$ = ['HUE', $2]; }
    | SATURATION num
        { $$ = ['SATURATION', $2]; }
    | BRIGHTNESS num
        { $$ = ['BRIGHTNESS', $2]; }
    | ALPHA num
        { $$ = ['ALPHA', $2]; }
    | HUE num '|'
        { $$ = ['HUE', $2, true]; }
    | SATURATION num '|'
        { $$ = ['SATURATION', $2, true]; }
    | BRIGHTNESS num '|'
        { $$ = ['BRIGHTNESS', $2, true]; }
    | ALPHA num '|'
        { $$ = ['ALPHA', $2, true]; }
    | TARGETHUE num
        { $$ = ['TARGETHUE', $2]; }
    | TARGETSATURATION num
        { $$ = ['TARGETSATURATION', $2]; }
    | TARGETBRIGHTNESS num
        { $$ = ['TARGETBRIGHTNESS', $2]; }
    | TARGETALPHA num
        { $$ = ['TARGETALPHA', $2]; }
    ;

num
    : n
    | '+' n
        { $$ = $2; }
    | '-' n
        { $$ = -$2; }
    | '(' e ')'
        { $$ = $2; }
    | function
    ;

e
    : n
    | e '+' e
        { $$ = $1 + $3; }
    | e '-' e
        { $$ = $1 - $3; }
    | e '*' e
        { $$ = $1 * $3; }
    | e '/' e
        { $$ = $1 / $3; }
    | e '^' e
        { $$ = Math.pow($1, $3); }
    | '+' e %prec POS
        { $$ = $2; }
    | '-' e %prec NEG
        { $$ = -$2; }
    | '(' e ')'
        { $$ = $2; }
    | function
    ;

function
    : id '(' ')'
        {{
            switch ($1) {
                case 'rand_static':
                    $$ = yy.rand_static;
                    break;
                default:
                    throw new Error('function \'' + $1 + '\' is not defined');
            }
        }}
    | id '(' e ')'
        {{
            switch ($1) {
                case 'cos':
                case 'sin':
                case 'tan':
                    $$ = Math[$1]($3 * Math.PI / 180);
                    break;
                case 'acos':
                case 'asin':
                case 'atan':
                    $$ = Math[$1]($3) / Math.PI * 180;
                    break;
                case 'log':
                case 'exp':
                case 'sqrt':
                case 'abs':
                    $$ = Math[$1]($3);
                    break;
                case 'log10':
                    $$ = Math.log($3) * Math.LOG10E;
                    break;
                case 'rand_static':
                    $$ = $3 * yy.rand_static;
                    break;
                default:
                    throw new Error('function \'' + $1 + '\' is not defined');
            }
        }}
    | id '(' e ',' e ')'
        {{
            switch ($1) {
                case 'atan2':
                    $$ = Math.atan2($3, $5) / Math.PI * 180;
                    break;
                case 'mod':
                    $$ = $3 % $5;
                    break;
                case 'rand_static':
                    $$ = Math.min($3, $5) + Math.abs($3 - $5) * yy.rand_static;
                    break;
                default:
                    throw new Error('function \'' + $1 + '\' is not defined');
            }
        }}
    ;

n
    : NUMBER
        { $$ = parseFloat(yytext); }
    ;

id
    : STRING
        { $$ = yytext; }
    ;
