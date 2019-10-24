var r = require("readline-sync");
var produtos = [{
    nome: 'carne de jaca',
    tempoDeValidade: 180,
    congelado: true
},

{
    nome: 'carne de banana',
    tempoDeValidade: 200,
    congelado: true
},

{
    nome: 'queijo de batata',
    tempoDeValidade: 20,
    congelado: true
},

{
    nome: 'pão desqueijo',
    tempoDeValidade: 150,
    congelado: true
}];
var posicao = parseInt(r.question('escolha um produto de 0 e 3'))
var diasParaOVencimentoDoProduto = parseInt(r.question('digite quantos dias faltam para vencer'))
//- Digitar quantos dias faltam para o produto vencer: "Digite quantos dias faltam para vencer
//porcentagem = (diasParaOVencimentoDoProduto * 100) / tempoDeValidadeDoProduto;
var produtoSelecionado = produtos[posicao];
var porsentagem = (diasParaOVencimentoDoProduto * 100) / produtoSelecionado.tempoDeValidade;

console.log(porcentagem)

if (porcentagem <= 2 %) {
    console.log("Descartar produto, muito proximo de vencer")
    //sequência de instruções
} else
    if (porcentagem <= 10 && !produtoSelecionado.congelado) {


        console.log("Desconto! Prduto não congelado e proximo da validade")
    }
    else if (porcentagem <= 5 && produtoSelecionado.congelado) {
        console.log("Desconto! Produto congelado e próximo da validade")
    }

    //sequência de instruções
}