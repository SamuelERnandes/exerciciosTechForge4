class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    
    valorTotalEstoque(): number {
        return this.preco * this.quantidade;
    }

    
    exibirValorEstoque(): void {
        const estoque = this.valorTotalEstoque();
        console.log(`O Produto: ${this.nome} tem em estoque: R$${estoque.toFixed(2)}`);
    }
}

const produto1 = new Produto("Parafuso", 1, 500);


produto1.exibirValorEstoque();
