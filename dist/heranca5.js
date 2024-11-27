"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    calcularSalarioComBonus() {
        return this.salario + this.calcularBonus();
    }
    mostrarInformacoes() {
        console.log(`Funcionário: ${this.nome}, Salário com bônus: ${this.calcularSalarioComBonus()}`);
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.1;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalariosComBonus(funcionarios) {
    funcionarios.forEach(funcionario => {
        funcionario.mostrarInformacoes();
    });
}
const gerente = new Gerente("Ana", 5000);
const operario = new Operario("Carlos", 2000);
calcularSalariosComBonus([gerente, operario]);
