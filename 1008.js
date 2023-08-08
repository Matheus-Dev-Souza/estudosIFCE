var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var idFuncionario = valores.shift();
var qtHorasTrabalhadas = valores.shift();
var valorHora = valores.shift();

var salario = qtHorasTrabalhadas * valorHora;

console.log("NUMBER = " + idFuncionario);
console.log("SALARY = U$ " +  salario.toFixed(2));