
interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}


class BibliotecaGestao {
    livros: LivroBiblioteca[];

   
    constructor(livros: LivroBiblioteca[]) {
        this.livros = livros;
    }

   
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }

   
    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    }

   
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel) 
            .sort((a, b) => a.titulo.localeCompare(b.titulo)); 
    }
}




const livros: LivroBiblioteca[] = [
    { titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false },
]


const biblioteca = new BibliotecaGestao(livros);


const livrosFantasia = biblioteca.filtrarPorGenero("Fantasia");
console.log("Livros de Fantasia:", livrosFantasia);


const livrosOrwell = biblioteca.buscarPorAutor("George Orwell");
console.log("Livros de George Orwell:", livrosOrwell);


const livrosDisponiveisOrdenados = biblioteca.obterLivrosDisponiveisOrdenados();
console.log("Livros Disponíveis Ordenados por Título:");
livrosDisponiveisOrdenados.forEach(livro => {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
});
