
class Pagamento {
    processar(): void {
      console.log("Processando pagamento...");
    }
  }
  
  
  class PagamentoCartao extends Pagamento {
    numeroCartao: string;
  
    constructor(numeroCartao: string) {
      super(); 
      this.numeroCartao = numeroCartao;
    }
  
    processar(): void {
      if (this.numeroCartao.length === 16) {
        console.log("Pagamento com cartão aprovado!");
      } else {
        console.log("Número do cartão inválido. Pagamento falhou.");
      }
    }
  }
  
  
  class PagamentoBoleto extends Pagamento {
    processar(): void {
      const codigoBoleto = Math.random().toString().slice(2, 14); 
      console.log(`Boleto gerado com sucesso! Código: ${codigoBoleto}`);
    }
  }
  
 
  function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => {
      pagamento.processar(); 
    });
  }
  
  
  const pagamentoCartao = new PagamentoCartao("1234567812345678");
  const pagamentoBoleto = new PagamentoBoleto();
  
  
  processarPagamentos([pagamentoCartao, pagamentoBoleto]);
  