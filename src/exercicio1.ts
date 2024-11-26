class ContaBancaria {
    private titular: string;
    private saldo: number;
    
    
    constructor(titular: string, saldo: number) {
        this.saldo = saldo;
        this.titular = titular;
    }

    
    exibirDeposito(): void {
        console.log(`O depósito inicial do usuário ${this.titular} foi de: R$${this.saldo}`);
    }

  
    exibirSacar(valorSaque: number): void {
        if (valorSaque > 0 && valorSaque <= this.saldo) {
            this.saldo -= valorSaque;  // Subtrai o valor do saque do saldo
            console.log(`O saque do usuário ${this.titular} foi de: R$${valorSaque}`);
        } else if (valorSaque > this.saldo) {
            console.log("Saldo insuficiente para o saque.");
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }
}


const contaBancaria1 = new ContaBancaria("Samuel Ernandes", 1500);


contaBancaria1.exibirDeposito();


contaBancaria1.exibirSacar(500);  
