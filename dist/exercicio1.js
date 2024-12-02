"use strict";
class Order {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
        this.paymentStatus = 'Pendente';
        this.shippingStatus = 'Não Enviado';
    }
    addItem(item, price) {
        this.items.push({ item, price });
        this.calculateTotal();
    }
    calculateTotal() {
        this.totalPrice = this.items.reduce((sum, currentItem) => sum + currentItem.price, 0);
    }
    processPayment() {
        if (this.totalPrice > 0) {
            this.paymentStatus = 'Pago';
        }
        else {
            this.paymentStatus = 'Erro no pagamento';
        }
    }
    updateShippingStatus() {
        if (this.paymentStatus === 'Pago') {
            this.shippingStatus = 'Enviado';
        }
        else {
            this.shippingStatus = 'Pendente';
        }
    }
}
class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }
    addItem(item, price) {
        this.items.push({ item, price });
        this.calculateTotal();
    }
    calculateTotal() {
        this.totalPrice = this.items.reduce((sum, currentItem) => sum + currentItem.price, 0);
    }
}
class Payment {
    constructor() {
        this.status = 'Pendente';
    }
    processPayment(totalPrice) {
        if (totalPrice > 0) {
            this.status = 'Pago';
        }
        else {
            this.status = 'Erro no pagamento';
        }
    }
}
class Shipping {
    constructor() {
        this.status = 'Não Enviado';
    }
    updateShippingStatus(paymentStatus) {
        if (paymentStatus === 'Pago') {
            this.status = 'Enviado';
        }
        else {
            this.status = 'Pendente';
        }
    }
}
class Order {
    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }
    addItem(item, price) {
        this.cart.addItem(item, price);
    }
    calculateTotal() {
        return this.cart.totalPrice;
    }
    processPayment() {
        this.payment.processPayment(this.cart.totalPrice);
    }
    updateShippingStatus() {
        this.shipping.updateShippingStatus(this.payment.status);
    }
    getOrderDetails() {
        return {
            items: this.cart.items,
            totalPrice: this.cart.totalPrice,
            paymentStatus: this.payment.status,
            shippingStatus: this.shipping.status
        };
    }
}
let order = new Order();
order.addItem('Camiseta', 29.99);
order.addItem('Calça Jeans', 49.99);
console.log(`Preço total: ${order.calculateTotal()}`);
order.processPayment();
order.updateShippingStatus();
const orderDetails = order.getOrderDetails();
console.log(orderDetails);
