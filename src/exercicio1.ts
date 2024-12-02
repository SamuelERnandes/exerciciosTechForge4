class Order {
    items: { item: string, price: number }[] = [];
    totalPrice: number = 0;
    paymentStatus: string = 'Pendente';
    shippingStatus: string = 'Não Enviado';

    addItem(item: string, price: number): void {
        this.items.push({ item, price });
        this.calculateTotal();
    }

    calculateTotal(): void {
        this.totalPrice = this.items.reduce((sum, currentItem) => sum + currentItem.price, 0);
    }

    processPayment(): void {
        if (this.totalPrice > 0) {
            this.paymentStatus = 'Pago';
        } else {
            this.paymentStatus = 'Erro no pagamento';
        }
    }

    updateShippingStatus(): void {
        if (this.paymentStatus === 'Pago') {
            this.shippingStatus = 'Enviado';
        } else {
            this.shippingStatus = 'Pendente';
        }
    }
}

class Cart {
    items: { item: string, price: number }[] = [];
    totalPrice: number = 0;

    addItem(item: string, price: number): void {
        this.items.push({ item, price });
        this.calculateTotal();
    }

    calculateTotal(): void {
        this.totalPrice = this.items.reduce((sum, currentItem) => sum + currentItem.price, 0);
    }
}
class Payment {
    status: string = 'Pendente';

    processPayment(totalPrice: number): void {
        if (totalPrice > 0) {
            this.status = 'Pago';
        } else {
            this.status = 'Erro no pagamento';
        }
    }
}
class Shipping {
    status: string = 'Não Enviado';

    updateShippingStatus(paymentStatus: string): void {
        if (paymentStatus === 'Pago') {
            this.status = 'Enviado';
        } else {
            this.status = 'Pendente';
        }
    }
}
class Order {
    cart: Cart;
    payment: Payment;
    shipping: Shipping;

    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }

    addItem(item: string, price: number): void {
        this.cart.addItem(item, price);
    }

    calculateTotal(): number {
        return this.cart.totalPrice;
    }

    processPayment(): void {
        this.payment.processPayment(this.cart.totalPrice);
    }

    updateShippingStatus(): void {
        this.shipping.updateShippingStatus(this.payment.status);
    }

    getOrderDetails(): object {
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
