#!/usr/bin/env node

var fs = require('fs');
var Jison = require('jison');

var grammar = fs.readFileSync('cfdg.jison', 'utf8');
var generator = new Jison.Generator(grammar);
var source = generator.generate({
    moduleType: 'js',
    moduleName: 'CFDG'
});
fs.writeFileSync('cfdg.js', source);
