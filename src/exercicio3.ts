
interface ProdutoLoja {
    codigo: number;
    nome: string;
}


class Loja {
    produtos: ProdutoLoja[];

    
    constructor(produtos: ProdutoLoja[]) {
        this.produtos = produtos;
    }

    
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}



const produtos: ProdutoLoja[] = [
    { codigo: 1, nome: "Camiseta" },
    { codigo: 2, nome: "Calça" },
    { codigo: 3, nome: "Tênis" }
];

const loja = new Loja(produtos);


const produtoEncontrado = loja.buscarProdutoPorCodigo(2);


if (produtoEncontrado) {
    console.log(`Produto encontrado: ${produtoEncontrado.nome}`);
} else {
    console.log("Produto não encontrado");
}
