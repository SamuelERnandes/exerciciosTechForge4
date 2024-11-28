interface Produto {
    id: number;      
    nome: string;    
    preco: number;   
}

class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;

    // Construtor para atribuir valores às propriedades
    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    // Método para exibir as informações do ItemLoja (opcional)
    exibirInfo(): void {
        console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco}`);
    }
}


const item = new ItemLoja(1, "Camiseta", 49.99);


item.exibirInfo();


console.log("ID do Produto:", item.id);
console.log("Nome do Produto:", item.nome);
console.log("Preço do Produto: R$", item.preco);
