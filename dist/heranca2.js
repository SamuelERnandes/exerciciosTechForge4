"use strict";
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function mostrarAreas(figuras) {
    figuras.forEach(figura => {
        console.log(`Área: ${figura.calcularArea()}`);
    });
}
const circulo = new Circulo(5);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(6, 3);
mostrarAreas([circulo, quadrado, triangulo]);
