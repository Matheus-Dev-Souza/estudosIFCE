const input = require("fs").readFileSync("stdin", "utf8");
const valores = input.split("\n");

const [idItem1, qtdItem1, valorUnitarioItem1] = valores[0].split(" ");
const [idItem2, qtdItem2, valorUnitarioItem2] = valores[1].split(" ");

const valorTotalItem1 = qtdItem1 * valorUnitarioItem1;
const valorTotalItem2 = qtdItem2 * valorUnitarioItem2;

const valorTotalCompra = valorTotalItem1 + valorTotalItem2;

console.log("VALOR A PAGAR: R$ " + valorTotalCompra.toFixed(2));
