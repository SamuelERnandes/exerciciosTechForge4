"use strict";
class Loja {
    constructor(produtos) {
        this.produtos = produtos;
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
const produtos = [
    { codigo: 1, nome: "Camiseta" },
    { codigo: 2, nome: "Calça" },
    { codigo: 3, nome: "Tênis" }
];
const loja = new Loja(produtos);
const produtoEncontrado = loja.buscarProdutoPorCodigo(2);
if (produtoEncontrado) {
    console.log(`Produto encontrado: ${produtoEncontrado.nome}`);
}
else {
    console.log("Produto não encontrado");
}
