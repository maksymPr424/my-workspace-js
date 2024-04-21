// TODO: =========Task1=========
//! Задача: Магазин товарів
// Створіть клас Product, який представляє товар у магазині. У класі повинні бути наступні властивості:

// name (ім'я товару)
// price (ціна товару)
// quantity (кількість товару)
// Також створіть методи для отримання та зміни цих властивостей.

// Потім створіть клас Shop, який представляє магазин. У цьому класі повинні бути наступні властивості та методи:

// name (ім'я магазину)
// inventory (інвентар магазину, список товарів)
// addProduct(product) - метод для додавання нового товару у інвентар магазину
// sellProduct(productName, quantity) - метод для продажу певної кількості товару з інвентарю. Якщо товар в наявності, він повинен бути видалений з інвентарю, і ціна товару повинна бути додана до загального доходу магазину. Якщо товар відсутній або його кількість менша за вказану, поверніть відповідне повідомлення про помилку.
// Також створіть метод для виведення загального доходу магазину.

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getParams(prod) {
    prod = prod.toLowerCase();
    if (prod === 'name') {
      return this.name;
    } else if (prod === 'quantity') {
      return this.quantity;
    } else {
      return this.price;
    }
  }

  changeParams(prod, value) {
    prod = prod.toLowerCase();
    if (prod === 'name') {
      this.name = value;
    } else if (prod === 'quantity') {
      this.quantity = value;
    } else {
      this.price = value;
    }
  }
}

class Shop {
  constructor(nameShop) {
    this.name = nameShop;
    this.inventory = [];
    this.totalPlus = 0;
  }

  addProduct(product) {
    this.inventory.push(product);
  }

  sellProduct(productName, productQuantity) {
    const product = this.inventory.find(
      product => product.name === productName
    );

    if (product.quantity > productQuantity) {
      product.quantity -= productQuantity;
      this.totalPlus += this.totalPlus + product.price * productQuantity;
      console.log(`Продаж ${productQuantity} ${productName}`);
    } else {
      console.log('Помилка - не вистачає товару в наявності');
    }
  }

  totalRevenue() {
    return this.totalPlus;
  }
}

// Створення декількох товарів
const laptop = new Product('Laptop', 1000, 5);
const phone = new Product('Phone', 500, 10);
const tablet = new Product('Tablet', 300, 8);

// Перевірка методів класу
console.log(laptop.getParams('price'));
laptop.changeParams('quantity', 13);
console.log(laptop.getParams('quantity'));

// Створення магазину
const myShop = new Shop('My Shop');

// Додавання товарів до інвентарю магазину
myShop.addProduct(laptop);
myShop.addProduct(phone);
myShop.addProduct(tablet);

// Продаж товару
myShop.sellProduct('Laptop', 2); // Продаж 2 ноутбуків
myShop.sellProduct('Phone', 15); // Помилка - не вистачає товару в наявності

// Виведення інвентарю магазину
console.log(myShop.inventory);

// Виведення загального доходу магазину
console.log(myShop.totalRevenue()); // Очікувано: 2000
