"use strict";
// Classe base Animal
class Animal {
    constructor(energiaInicial) {
        this.energia = energiaInicial;
    }
    comer() {
        this.energia += 10;
        console.log("O animal comeu e ganhou 10 de energia.");
    }
    statusEnergia() {
        console.log(`Energia atual: ${this.energia}`);
    }
    gastarEnergia(quantidade) {
        this.energia -= quantidade;
        console.log(`O animal gastou ${quantidade} de energia.`);
    }
}
class Leao extends Animal {
    constructor(energiaInicial) {
        super(energiaInicial);
    }
    comer() {
        console.log("O leão está caçando...");
        this.gastarEnergia(10);
        super.comer();
    }
}
// Subclasse Passaro
class Passaro extends Animal {
    constructor(energiaInicial) {
        super(energiaInicial);
    }
    comer() {
        console.log("O pássaro está comendo sementes...");
        super.comer();
    }
}
function interagirComAnimais(animais) {
    animais.forEach(animal => {
        animal.comer();
        animal.statusEnergia();
    });
}
const leao = new Leao(50);
const passaro = new Passaro(30);
interagirComAnimais([leao, passaro]);
