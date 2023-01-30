// Определите класс `Writer`, содержащий следующие методы экземпляра:

// - `getFullName` возвращает полное имя писателя
// - `canVote` возвращает истину, когда возраст 18 или выше, и ложь в противном случае
// - `publishArticle` выводит в консоль строку: `"Article published"`


/* index.js */
import User from "./user.js";

class Writer extends User {
    publishArticle() {
      return "Article published";
    }
  }


const user = new User('Sam', 'Smith', 30);
console.log(user); // User {firstName: 'Sam', lastName: 'Smith', age: 30}

const writer = new Writer('Tom', 'Roth', 20);
console.log(writer); // Writer {firstName: 'Tom', lastName: 'Roth', age: 20}
console.log(writer.publishArticle()); // Article published