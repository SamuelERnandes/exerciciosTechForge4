"use strict";
class TaskManager {
    constructor() {
        this.tasks = new Set();
    }
    // Método para listar todas as tarefas
    listTasks() {
        return Array.from(this.tasks);
    }
}
class Project extends TaskManager {
    constructor(projectName) {
        super();
        this.projectName = projectName;
    }
    addTask(task) {
        if (!this.tasks.has(task)) {
            this.tasks.add(task);
            console.log(`Tarefa "${task}" adicionada ao projeto "${this.projectName}".`);
        }
        else {
            console.log(`Tarefa "${task}" já existe no projeto "${this.projectName}".`);
        }
    }
}
class DailyTasks extends TaskManager {
    constructor(date) {
        super();
        this.date = date;
    }
    addTask(task) {
        if (!this.tasks.has(task)) {
            this.tasks.add(task);
            console.log(`Tarefa diária "${task}" adicionada para o dia ${this.date}.`);
        }
        else {
            console.log(`Tarefa diária "${task}" já foi adicionada para o dia ${this.date}.`);
        }
    }
}
const project = new Project("Desenvolvimento de Website");
project.addTask("Criar layout");
project.addTask("Implementar API");
project.addTask("Criar layout");
console.log(project.listTasks());
const dailyTasks = new DailyTasks("2024-12-01");
dailyTasks.addTask("Revisar e-mails");
dailyTasks.addTask("Fazer exercícios");
dailyTasks.addTask("Revisar e-mails");
console.log(dailyTasks.listTasks());
