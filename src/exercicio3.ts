class EmailSender {
   
    private isValidEmail(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }


    private sendEmail(email: string, subject: string, message: string): void {
        console.log(`Enviando e-mail para ${email}...`);
        console.log(`Assunto: ${subject}`);
        console.log(`Mensagem: ${message}`);
    }

  
    sendEmailToContact(email: string, subject: string, message: string): void {
        if (this.isValidEmail(email)) {
            this.sendEmail(email, subject, message);
        } else {
            console.log("Erro: E-mail inválido.");
        }
    }
}

class ContactValidator {
    
    validateEmail(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
}
class EmailSender {
    contactValidator: ContactValidator;

    constructor(contactValidator: ContactValidator) {
        this.contactValidator = contactValidator;
    }

  
    private sendEmail(email: string, subject: string, message: string): void {
        console.log(`Enviando e-mail para ${email}...`);
        console.log(`Assunto: ${subject}`);
        console.log(`Mensagem: ${message}`);
    }

    
    sendEmailToContact(email: string, subject: string, message: string): void {
        if (this.contactValidator.validateEmail(email)) {
            this.sendEmail(email, subject, message);
        } else {
            console.log("Erro: E-mail inválido.");
        }
    }
}

const contactValidator = new ContactValidator();


const emailSender = new EmailSender(contactValidator);

emailSender.sendEmailToContact('contato@exemplo.com', 'Assunto do E-mail', 'Mensagem do e-mail');

emailSender.sendEmailToContact('contatoexemplo.com', 'Assunto do E-mail', 'Mensagem do e-mail');
