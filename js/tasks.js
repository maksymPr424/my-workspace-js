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

// class Product {
//   constructor(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   getParams(prod) {
//     prod = prod.toLowerCase();
//     if (prod === 'name') {
//       return this.name;
//     } else if (prod === 'quantity') {
//       return this.quantity;
//     } else {
//       return this.price;
//     }
//   }

//   changeParams(prod, value) {
//     prod = prod.toLowerCase();
//     if (prod === 'name') {
//       this.name = value;
//     } else if (prod === 'quantity') {
//       this.quantity = value;
//     } else {
//       this.price = value;
//     }
//   }
// }

// class Shop {
//   constructor(nameShop) {
//     this.name = nameShop;
//     this.inventory = [];
//     this.totalPlus = 0;
//   }

//   addProduct(product) {
//     this.inventory.push(product);
//   }

//   sellProduct(productName, productQuantity) {
//     const product = this.inventory.find(
//       product => product.name === productName
//     );

//     if (product.quantity > productQuantity) {
//       product.quantity -= productQuantity;
//       this.totalPlus += this.totalPlus + product.price * productQuantity;
//       console.log(`Продаж ${productQuantity} ${productName}`);
//     } else {
//       console.log('Помилка - не вистачає товару в наявності');
//     }
//   }

//   totalRevenue() {
//     return this.totalPlus;
//   }
// }

// // Створення декількох товарів
// const laptop = new Product('Laptop', 1000, 5);
// const phone = new Product('Phone', 500, 10);
// const tablet = new Product('Tablet', 300, 8);

// // Перевірка методів класу
// console.log(laptop.getParams('price'));
// laptop.changeParams('quantity', 13);
// console.log(laptop.getParams('quantity'));

// // Створення магазину
// const myShop = new Shop('My Shop');

// // Додавання товарів до інвентарю магазину
// myShop.addProduct(laptop);
// myShop.addProduct(phone);
// myShop.addProduct(tablet);

// // Продаж товару
// myShop.sellProduct('Laptop', 2); // Продаж 2 ноутбуків
// myShop.sellProduct('Phone', 15); // Помилка - не вистачає товару в наявності

// // Виведення інвентарю магазину
// console.log(myShop.inventory);

// // Виведення загального доходу магазину
// console.log(myShop.totalRevenue()); // Очікувано: 2000

// TODO: =========Task2=========
//!  Задача: Керування Користувачами
// Створіть клас User, який буде представляти користувача вашого додатку.У кожного користувача має бути наступна інформація:

// Ім'я
// Прізвище
// Електронна пошта
// Роль(наприклад, адміністратор, звичайний користувач, гость)
// Створіть конструктор класу User, який приймає параметри: ім'я, прізвище, електронна пошта та роль, і ініціалізує відповідні властивості об'єкта.
// Додайте методи для отримання та встановлення значень властивостей об'єкта (гетери та сетери).
// Додайте метод для відображення інформації про користувача.Метод має виводити ім'я, прізвище, електронну пошту та роль користувача в консоль.
// Створіть клас Admin, який наслідує клас User.Додайте нову властивість для адміністратора, наприклад, доступ до панелі керування.
// Перевизначте метод відображення інформації про користувача у класі Admin, щоб він включав інформацію про доступ до панелі керування.
// Створіть декілька об'єктів класу User та Admin і викличте метод відображення інформації для кожного з них.

// class User {
//   name;
//   email;
//   role;

//   constructor(name, email, role) {
//     this.name = name;
//     this.email = email;
//     this.role = role
//   }

//   get name() {
//     return this.name;
//   }

//   set name(newName) {
//     this.name = newName;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }

//   get role() {
//     return this.role;
//   }

//   set role(newRole) {
//     this.role = newRole;
//   }

//   getUser() {
//     console.log(`Name: ${this.name}, email: ${this.email}, role: ${this.role}`);
//   }
// }

// const user1 = new User('Petya', "jh@hh", "administration");
// user1.name = 'Anna';
// user1.getUser();

// TODO: =========Task2=========

// !Задача: Управління бібліотекою книг
// Створіть клас Book, що представляє окрему книгу в бібліотеці.Кожна книга має наступні властивості:

// Назва
// Автор
// Рік видання
// ISBN(унікальний ідентифікатор книги)
// Створіть конструктор класу Book, який приймає параметри для назви, автора, року видання та ISBN, і ініціалізує відповідні властивості об'єкта.
// Додайте метод для відображення інформації про книгу.Метод має виводити всю доступну інформацію про книгу в консоль.
// Створіть клас Library, який буде представляти бібліотеку з книгами.Бібліотека повинна мати властивості для збереження списку книг.
// Додайте методи для додавання нової книги до бібліотеки та видалення книги з бібліотеки за її ISBN.
// Додайте метод для пошуку книги за назвою та метод для відображення всіх книг у бібліотеці.
// Створіть декілька об'єктів класу Book та додайте їх до об'єкту класу Library.Використайте методи для видалення та пошуку книг, а також для відображення всіх книг у бібліотеці.

// class Book {
//   constructor(inviteBook) {
//     this.name = inviteBook.name;
//     this.author = inviteBook.author;
//     this.year = inviteBook.year;
//     this.isbn = inviteBook.isbn;
//   }

//   getBook() {
//     console.log(
//       `Name book: ${this.name}, author: ${this.author}, year of publication ${this.year}, ISBN: ${this.isbn}`
//     );
//   }
// }

// class Library {
//   constructor() {
//     this.bookshelf = [];
//   }

//   addBook(book) {
//     this.bookshelf.push(book);
//   }

//   reduceBook(isbn) {
//     this.bookshelf.splice(
//       this.bookshelf.find(item => item.isbn === isbn),
//       1
//     );
//   }

//   getForName(name) {
//     return this.bookshelf.find(item => item.name === name);
//   }

//   getBookshelf() {
//     return this.bookshelf;
//   }
// }

// const HaryPoter1Book = {
//   name: 'HaryPoter1',
//   author: 'Joan Roaling',
//   year: 1900,
//   isbn: 123,
// };

// const HaryPoter2Book = {
//   name: 'HaryPoter2',
//   author: 'Joan Roaling',
//   year: 1910,
//   isbn: 1234,
// };

// const HaryPoter3Book = {
//   name: 'HaryPoter3',
//   author: 'Joan Roaling',
//   year: 1912,
//   isbn: 12345,
// };

// const library = new Library();

// const haryPoter1 = new Book(HaryPoter1Book);
// const haryPoter2 = new Book(HaryPoter2Book);
// const haryPoter3 = new Book(HaryPoter3Book);

// library.addBook(haryPoter1);
// library.addBook(haryPoter2);
// library.addBook(haryPoter3);

// console.log(library.getBookshelf());

// TODO: =========Task2=========

//! Додавання товарів до кошика:
// Користувач повинен мати можливість додати товар до кошика, натиснувши на відповідну кнопку на сторінці товару.
// Кожен товар має мати унікальний ідентифікатор, назву, ціну та кількість одиниць товару.
// Видалення товарів з кошика:
// Користувач повинен мати можливість видалити товар з кошика, натиснувши на кнопку "Видалити" поруч з товаром у списку кошика.
// Обчислення загальної вартості:
// На сторінці кошика повинен бути відображений список усіх товарів, які додані до кошика, разом з їх ціною та кількістю.
// Під списком товарів повинна бути відображена загальна вартість кошика.
// Збереження стану кошика:
// Стан кошика (товари, їх кількість) повинен зберігатися між сеансами користувача.