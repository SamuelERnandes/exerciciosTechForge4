"use strict";
class UserManager {
    constructor() {
        this.users = [];
    }
    createUser(name, email) {
        const newUser = { name, email };
        this.users.push(newUser);
        this.sendEmailNotification(newUser.email, "Bem-vindo!", "Você foi criado com sucesso.");
    }
    sendEmailNotification(email, subject, message) {
        console.log(`Enviando e-mail para ${email}...`);
        console.log(`Assunto: ${subject}`);
        console.log(`Mensagem: ${message}`);
    }
}
class EmailNotification {
    sendEmail(email, subject, message) {
        console.log(`Enviando e-mail para ${email}...`);
        console.log(`Assunto: ${subject}`);
        console.log(`Mensagem: ${message}`);
    }
}
class UserManager {
    constructor(emailNotification) {
        this.users = [];
        this.emailNotification = emailNotification;
    }
    createUser(name, email) {
        // Criação do usuário
        const newUser = { name, email };
        this.users.push(newUser);
        this.emailNotification.sendEmail(newUser.email, "Bem-vindo!", "Você foi criado com sucesso.");
    }
}
const emailNotification = new EmailNotification();
const userManager = new UserManager(emailNotification);
userManager.createUser('João', 'joao@example.com');
