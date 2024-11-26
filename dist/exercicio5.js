"use strict";
class Agenda {
    constructor() {
        this.compromissos = [];
    }
    adicionarCompromisso(compromisso) {
        this.compromissos.push(compromisso);
        console.log(`Compromisso "${compromisso}" adicionado com sucesso.`);
    }
    listarCompromissos() {
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso agendado.");
        }
        else {
            console.log("Compromissos agendados:");
            this.compromissos.forEach((compromisso, index) => {
                console.log(`${index + 1}. ${compromisso}`);
            });
        }
    }
}
const minhaAgenda = new Agenda();
// Adicionando compromissos
minhaAgenda.adicionarCompromisso("Reunião com cliente às 10h");
minhaAgenda.adicionarCompromisso("Consulta médica às 14h");
minhaAgenda.adicionarCompromisso("Treinamento de equipe às 16h");
minhaAgenda.listarCompromissos();
