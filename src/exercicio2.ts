
abstract class Inventory {
    protected inventory: Record<string, number>; 
  
    constructor() {
      this.inventory = {};
    }
  
   
    abstract addItem(item: string, quantity: number): void;
  
  
    abstract removeItem(item: string): void;
  
   
    getInventory(): Record<string, number> {
      return this.inventory;
    }
  }
  

  class WarehouseInventory extends Inventory {
  
  
    addItem(item: string, quantity: number): void {
      if (item in this.inventory) {
        this.inventory[item] += quantity;
      } else {
        this.inventory[item] = quantity;
      }
      console.log(`Adicionado ${quantity} de "${item}" ao inventário do armazém.`);
    }
  
 
    removeItem(item: string): void {
      if (item in this.inventory) {
        delete this.inventory[item];
        console.log(`Item "${item}" removido do inventário do armazém.`);
      } else {
        console.log(`Item "${item}" não encontrado no inventário do armazém.`);
      }
    }
  }
  

  class StoreInventory extends Inventory {
  
    private readonly maxQuantityPerItem: number = 10; 
  
 
    addItem(item: string, quantity: number): void {
      if (item in this.inventory) {
        if (this.inventory[item] + quantity <= this.maxQuantityPerItem) {
          this.inventory[item] += quantity;
          console.log(`Adicionado ${quantity} de "${item}" ao inventário da loja.`);
        } else {
          console.log(`Não é possível adicionar ${quantity} de "${item}". Limite de ${this.maxQuantityPerItem} unidades por item atingido.`);
        }
      } else {
        if (quantity <= this.maxQuantityPerItem) {
          this.inventory[item] = quantity;
          console.log(`Adicionado ${quantity} de "${item}" ao inventário da loja.`);
        } else {
          console.log(`Não é possível adicionar ${quantity} de "${item}". Limite de ${this.maxQuantityPerItem} unidades por item atingido.`);
        }
      }
    }
  

    removeItem(item: string): void {
      if (item in this.inventory) {
        delete this.inventory[item];
        console.log(`Item "${item}" removido do inventário da loja.`);
      } else {
        console.log(`Item "${item}" não encontrado no inventário da loja.`);
      }
    }
  }

  

  const warehouse = new WarehouseInventory();
  warehouse.addItem("Cadeiras", 50);
  warehouse.addItem("Mesas", 30);
  warehouse.addItem("Cadeiras", 20);
  console.log(warehouse.getInventory());

  const store = new StoreInventory();
  store.addItem("Camiseta", 5);
  store.addItem("Camiseta", 6); 
  store.addItem("Boné", 8);
  store.addItem("Boné", 3); 
  store.removeItem("Boné");
  console.log(store.getInventory());
  