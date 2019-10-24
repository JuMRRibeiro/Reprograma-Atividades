//resposta aqui
const r = require("readline-sync");
let operacao = (r.question("Escolha uma operacao:"));
let valor1 = parseInt(r.question("Digite valor 1: "));
let valor2 = parseInt(r.question("Digite valor 2: "));
let resultado;

switch (operacao) {
    case "+":
        resultado = soma(valor1, valor2);
        break;
    case "-":
        resultado = subtrair(valor1, valor2);
        break;
    case "*":
        resultado = multiplicar(valor1, valor2);
        break;
    case "/":
        resultado = dividir(valor1, valor2);
        break;
}
console.log(resultado)

function soma(valor1, valor2) {
    return valor1 + valor2;


}
function subtrair(valor1, valor2) {
    return valor1 - valor2;

}
function multiplicar(valor1, valor2) {
    return valor1 * valor2;

}

function dividir(valor1, valor2) {
    return valor1 / valor2;

}