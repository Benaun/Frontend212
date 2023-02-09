// Реализуйте функцию получения для свойства csvString в классе Tasks. Геттер должен возвращать CSV-строку задач. Каждое задание должно быть разделено запятой и пробелом.


class Tasks {
  /**
  * @param {string[]} todos
  */
  constructor(todos) {
    this._todos = todos;
  }

  get csvString(){
    return this._todos.join(", ");
  }

  set csvString(todos){
    this._todos = todos;
  }
}

// Sample usage - do not modify
const tasks = new Tasks(["Laundry", "Clean kitchen"]);
tasks.csvString; // "Laundry, Clean kitchen"



// Платежные системы (такие как [Stripe](https://stripe.com/)) часто взимают сумму в центах, а не в долларах, чтобы избежать ошибок с десятичными в программировании.
// Установите геттер для возврата `_cents`. Установите в сеттер внутреннюю переменную экземпляра `_cents`, которая будет отображать значения полученные из переменной `amount`, в центах.

class Payment {
  /**
  * @param {number} amount
  */
  constructor(amount) {
    this.amount = amount;
  }

  get amount(){
    return `${this._cents} (value in cents)`;
  }

  set amount(amount){
    this._cents = amount * 100;
  }
}

// Sample usage - do not modify
const payment = new Payment(10); // 10 USD
payment.amount; // 1000 (value in cents)

payment.amount = 7; // 7 USD
payment.amount; // 700 (value in cents)
