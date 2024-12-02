"use strict";
class EmailSender {
    isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
    sendEmail(email, subject, message) {
        console.log(`Enviando e-mail para ${email}...`);
        console.log(`Assunto: ${subject}`);
        console.log(`Mensagem: ${message}`);
    }
    sendEmailToContact(email, subject, message) {
        if (this.isValidEmail(email)) {
            this.sendEmail(email, subject, message);
        }
        else {
            console.log("Erro: E-mail inválido.");
        }
    }
}
class ContactValidator {
    validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
}
class EmailSender {
    constructor(contactValidator) {
        this.contactValidator = contactValidator;
    }
    sendEmail(email, subject, message) {
        console.log(`Enviando e-mail para ${email}...`);
        console.log(`Assunto: ${subject}`);
        console.log(`Mensagem: ${message}`);
    }
    sendEmailToContact(email, subject, message) {
        if (this.contactValidator.validateEmail(email)) {
            this.sendEmail(email, subject, message);
        }
        else {
            console.log("Erro: E-mail inválido.");
        }
    }
}
const contactValidator = new ContactValidator();
const emailSender = new EmailSender(contactValidator);
emailSender.sendEmailToContact('contato@exemplo.com', 'Assunto do E-mail', 'Mensagem do e-mail');
emailSender.sendEmailToContact('contatoexemplo.com', 'Assunto do E-mail', 'Mensagem do e-mail');
