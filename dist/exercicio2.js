"use strict";
class Livro {
    constructor(titulo, autor, paginas, lido = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    marcarComoLido() {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }
    exibirInformacoes() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Páginas: ${this.paginas}`);
        console.log(`Lido: ${this.lido ? 'Sim' : 'Não'}`);
    }
}
const livro1 = new Livro('1984', 'George Orwell', 328);
livro1.exibirInformacoes();
// Marcando o livro como lido
livro1.marcarComoLido();
livro1.exibirInformacoes();
