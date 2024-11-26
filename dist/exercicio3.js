"use strict";
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorTotalEstoque() {
        return this.preco * this.quantidade;
    }
    exibirValorEstoque() {
        const estoque = this.valorTotalEstoque();
        console.log(`O Produto: ${this.nome} tem em estoque: R$${estoque.toFixed(2)}`);
    }
}
const produto1 = new Produto("Parafuso", 1, 500);
produto1.exibirValorEstoque();
