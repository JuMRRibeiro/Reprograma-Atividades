//resposta aqui

//var r = require("readline-sync");

//var a = parseInt(r.question("digite 1 ou 2"))

//console.log(a)

var r = require("readline-sync");
var produtos = [
    { nome: 'alface', preco: 1.99},
    { nome: 'cenoura', preco: 2.99 },
];

var posicao = parseInt(r.question('escolha um produto entre 0 e 2')),
var porsentagem = parseInt(r.question('digite uma porcentagem'));
var produtoSelecionado = (produtos[posicao]);
var desconto = produtoSelencionado.preco * (porcentagem / 100);
console.log('produto' + produtoSelencionado.nome + 'com desconto é de R$' + desconto.toFixed(2))

