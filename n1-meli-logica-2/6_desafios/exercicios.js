//1 - Utilizando uma estrutura de repetição diferente da que utilizou ontem, 
//crie um programa para printar todos os números pares de 1 a 100.
//- Números pares são todos os números que dividos por 2 tem resto 0
//- Qual operador que retorna o resto da divisão? Vamos usar ele!
const r = require("readline-sync");
// let i = 0
// do {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//     i++
// } while (i <= 100)

//2) Crie um programa gerador de estrelas. O usuário informa um número, 
//e o programa gera uma pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// let numeroDigitado = parseInt(r.question("Informe a quantidade de estrelas que voce deseja gerar"));
// let estrelas = "";
// let i = 0;
// while (i < numeroDigitado) {
//     estrelas += "*";

//     i++;
//     console.log(estrelas);
// } 

// 3- Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
// Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
// O programa vai dizer "Tchau [nome]" e finalizar o programa.

// let nome = r.question("Digite seu nome");
// console.log("Olá" + nome);
// let texto = "";

// for(;texto != "tchau";){
//     texto = r.question("Digite algum comando ou "tchau" para sair");
//         console.log("Voce digitou:" + texto);
// }
// console.log("tchau" + nome)

// 4

// let passos = 0;
// const meta = 500;
// for(;passos < meta;){
//     passos += parseInt
// }

//5

// for(let numero = 10; numero>=1; numero--){
//     console.log(numero);
// }

//6

let array = [5, 37, 18, 12, -5];
let maior = 0;
let menor = 0;

for (let i=0; i < array.length; i++) {
    if (array[i] > maior) {
        maior = array[i];

    }
    if (array[i]<menor){
        menor = array[i];
    }
}
console.log("maior:" + maior + ".menor:" + menor)