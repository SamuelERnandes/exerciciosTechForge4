interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    titulo: string;
    conteudo: string;

    // Construtor para atribuir valores ao título e conteúdo
    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    
    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}



const documento = new Texto("Meu Documento", "Este é o conteúdo do meu documento.");


console.log(documento.exibir());
