// Classe base
class Veiculo {
    mover(): void {
      console.log("O veículo está se movendo");
    }
  }
  
  // Subclasse Carro
  class Carro extends Veiculo {
    mover(): void {
      console.log("O carro está dirigindo");
    }
  }
  
  // Subclasse Bicicleta
  class Bicicleta extends Veiculo {
    mover(): void {
      console.log("A bicicleta está pedalando");
    }
  }
  
  // Instanciando objetos das subclasses e chamando o método mover()
  const carro = new Carro();
  carro.mover();  // Saída: O carro está dirigindo
  
  const bicicleta = new Bicicleta();
  bicicleta.mover();  // Saída: A bicicleta está pedalando
  