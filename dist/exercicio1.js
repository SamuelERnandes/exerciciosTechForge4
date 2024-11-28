"use strict";
class ItemLoja {
    // Construtor para atribuir valores às propriedades
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    // Método para exibir as informações do ItemLoja (opcional)
    exibirInfo() {
        console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco}`);
    }
}
const item = new ItemLoja(1, "Camiseta", 49.99);
item.exibirInfo();
console.log("ID do Produto:", item.id);
console.log("Nome do Produto:", item.nome);
console.log("Preço do Produto: R$", item.preco);
