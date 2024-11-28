"use strict";
class Biblioteca {
    constructor(livros) {
        this.livros = livros;
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
}
const livros = [
    { titulo: "1984", autor: "George Orwell", disponivel: true },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: false },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true },
    { titulo: "Harry Potter", autor: "J.K. Rowling", disponivel: false }
];
const biblioteca = new Biblioteca(livros);
const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log("Livros Disponíveis:");
livrosDisponiveis.forEach(livro => {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
});
