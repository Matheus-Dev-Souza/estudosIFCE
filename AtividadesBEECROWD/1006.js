var input = require("fs").readFileSync("stdin", "utf8");

var linhas = input.split("\n");


var A = parseInt(linhas.shift());
var B = parseInt(linhas.shift());
var C = parseInt(linhas.shift());
var D = parseInt(linhas.shift());

var media = (A*3.5 + B*3.5 + C*1.5 + D*1.5) / 10.0;

console.log("MEDIA: " + media.toFixed(1));