
abstract class Funcionario {
    private nome: string;
    private salario: number;
  
    constructor(nome: string, salario: number) {
      this.nome = nome;
      this.salario = salario;
    }
  
    
    getSalario(): number {
      return this.salario;
    }
  
    
    abstract calcularBonus(): number;
  
    
    calcularSalarioComBonus(): number {
      return this.salario + this.calcularBonus();
    }
  
   
    mostrarInformacoes(): void {
      console.log(`Funcionário: ${this.nome}, Salário com bônus: ${this.calcularSalarioComBonus()}`);
    }
  }
  

  class Gerente extends Funcionario {
   
    calcularBonus(): number {
      return this.getSalario() * 0.1; 
    }
  }
  
  
  class Operario extends Funcionario {
    
    calcularBonus(): number {
      return this.getSalario() * 0.05; 
    }
  }
  
  
  function calcularSalariosComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
      funcionario.mostrarInformacoes(); 
    });
  }
  

  const gerente = new Gerente("Ana", 5000); 
  const operario = new Operario("Carlos", 2000); 
  

  calcularSalariosComBonus([gerente, operario]);
  