"use strict";
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    paraFahrenheit() {
        return (this.valor * 9 / 5) + 32;
    }
    paraKelvin() {
        return this.valor + 273.15;
    }
    exibirTemperaturas() {
        console.log(`${this.valor}°C é equivalente a:`);
        console.log(`${this.paraFahrenheit()}°F (Fahrenheit)`);
        console.log(`${this.paraKelvin()}K (Kelvin)`);
    }
}
const temperatura1 = new Temperatura(25);
temperatura1.exibirTemperaturas();