
abstract class TaskManager {
    protected tasks: Set<string>; 
  
    constructor() {
      this.tasks = new Set();
    }
  
   
    abstract addTask(task: string): void;
  
    // Método para listar todas as tarefas
    listTasks(): string[] {
      return Array.from(this.tasks);
    }
  }
  

  class Project extends TaskManager {
    private projectName: string;
  
    constructor(projectName: string) {
      super(); 
      this.projectName = projectName;
    }
  
  
    addTask(task: string): void {
      if (!this.tasks.has(task)) {
        this.tasks.add(task);
        console.log(`Tarefa "${task}" adicionada ao projeto "${this.projectName}".`);
      } else {
        console.log(`Tarefa "${task}" já existe no projeto "${this.projectName}".`);
      }
    }
  }
  

  class DailyTasks extends TaskManager {
    private date: string;
  
    constructor(date: string) {
      super(); 
      this.date = date;
    }
  
  
    addTask(task: string): void {
      if (!this.tasks.has(task)) {
        this.tasks.add(task);
        console.log(`Tarefa diária "${task}" adicionada para o dia ${this.date}.`);
      } else {
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
  