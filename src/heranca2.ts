
abstract class FiguraGeometrica {
    
    abstract calcularArea(): number;
  }
  
  
  class Circulo extends FiguraGeometrica {
    raio: number;
  
    constructor(raio: number) {
      super();
      this.raio = raio;
    }
  
    
    calcularArea(): number {
      return Math.PI * this.raio * this.raio; 
    }
  }
  
  
  class Quadrado extends FiguraGeometrica {
    lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    
    calcularArea(): number {
      return this.lado * this.lado; 
    }
  }
  
  
  class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
   
    calcularArea(): number {
      return (this.base * this.altura) / 2; 
    }
  }
  
  
  function mostrarAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach(figura => {
      console.log(`Área: ${figura.calcularArea()}`);
    });
  }
  
  
  const circulo = new Circulo(5);    
  const quadrado = new Quadrado(4);  
  const triangulo = new Triangulo(6, 3); 
  
  
  mostrarAreas([circulo, quadrado, triangulo]);
  