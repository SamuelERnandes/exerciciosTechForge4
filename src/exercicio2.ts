class UserManager {
    users: { name: string, email: string }[] = [];

   
    createUser(name: string, email: string): void {
       
        const newUser = { name, email };
        this.users.push(newUser);

     
        this.sendEmailNotification(newUser.email, "Bem-vindo!", "Você foi criado com sucesso.");
    }


    private sendEmailNotification(email: string, subject: string, message: string): void {
        console.log(`Enviando e-mail para ${email}...`);
        console.log(`Assunto: ${subject}`);
        console.log(`Mensagem: ${message}`);
    }
}

class EmailNotification {
    sendEmail(email: string, subject: string, message: string): void {
        console.log(`Enviando e-mail para ${email}...`);
        console.log(`Assunto: ${subject}`);
        console.log(`Mensagem: ${message}`);
    }
}
class UserManager {
    users: { name: string, email: string }[] = [];
    emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser(name: string, email: string): void {
        // Criação do usuário
        const newUser = { name, email };
        this.users.push(newUser);

        this.emailNotification.sendEmail(newUser.email, "Bem-vindo!", "Você foi criado com sucesso.");
    }
}

const emailNotification = new EmailNotification();


const userManager = new UserManager(emailNotification);


userManager.createUser('João', 'joao@example.com');


