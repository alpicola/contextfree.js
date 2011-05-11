%lex
%%

\s+                       /* skip */
"//".*                    /* ignore comment */

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
    : XSHIFT e
        { $$ = ['XSHIFT', $2]; }
    | YSHIFT e
        { $$ = ['YSHIFT', $2]; }
    | ZSHIFT e
        { $$ = ['ZSHIFT', $2]; }
    | ROTATE e
        { $$ = ['ROTATE', $2]; }
    | SIZE e
        { $$ = ['SIZE', $2, $2]; }
    | SIZE e e
        { $$ = ['SIZE', $2, $3]; }
    | SKEW e e
        { $$ = ['SKEW', $2, $3]; }
    | FLIP e
        { $$ = ['FLIP', $2]; }
    ;

color_adjustment
    : HUE e
        { $$ = ['HUE', $2]; }
    | SATURATION e
        { $$ = ['SATURATION', $2]; }
    | BRIGHTNESS e
        { $$ = ['BRIGHTNESS', $2]; }
    | ALPHA e
        { $$ = ['ALPHA', $2]; }
    ;

e
    : e '+' e
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
    | n
    ;

n
    : NUMBER
        { $$ = parseFloat(yytext); }
    ;

id
    : STRING
        { $$ = yytext; }
    ;
