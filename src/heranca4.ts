// Classe base Animal
class Animal {
    private energia: number; 
  
    constructor(energiaInicial: number) {
      this.energia = energiaInicial;
    }
  
    
    comer(): void {
      this.energia += 10; 
      console.log("O animal comeu e ganhou 10 de energia.");
    }
  
    
    statusEnergia(): void {
      console.log(`Energia atual: ${this.energia}`);
    }
  
    
    gastarEnergia(quantidade: number): void {
      this.energia -= quantidade;
      console.log(`O animal gastou ${quantidade} de energia.`);
    }
  }
  
  
  class Leao extends Animal {
    constructor(energiaInicial: number) {
      super(energiaInicial); 
    }
  
    
    comer(): void {
      console.log("O leão está caçando...");
      this.gastarEnergia(10); 
      super.comer(); 
    }
  }
  
  // Subclasse Passaro
  class Passaro extends Animal {
    constructor(energiaInicial: number) {
      super(energiaInicial); 
    }
  
    
    comer(): void {
      console.log("O pássaro está comendo sementes...");
      super.comer(); 
    }
  }
  
  
  function interagirComAnimais(animais: Animal[]): void {
    animais.forEach(animal => {
      animal.comer(); 
      animal.statusEnergia(); 
    });
  }
  
  
  const leao = new Leao(50); 
  const passaro = new Passaro(30); 
  
  
  interagirComAnimais([leao, passaro]);
  