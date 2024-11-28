"use strict";
class Texto {
    // Construtor para atribuir valores ao título e conteúdo
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}
const documento = new Texto("Meu Documento", "Este é o conteúdo do meu documento.");
console.log(documento.exibir());
