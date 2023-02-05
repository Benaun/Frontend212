// Напишите класс пользователя с двумя методами экземпляра: `getFullName()` и `canVote()`:
// - `getFullName` должен возвращать префикс `Mr.`
// - `canVote()` должен вернуть `true`, если возраст пользователя 18 лет и старше

// define class here
class User {
  constructor(firstName, lastName, prefics, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.prefics = prefics;
    this.age = age;
  }

  getFullName (){
    return `${this.prefics}. ${this.firstName} ${this.lastName}`;
  }

  canVote(){
    return this.age >= 18;
  }
}


// // Sample usage - do not modify
const user1 = new User("Kate", "Smith", "Mrs", 20);
user1.getFullName(); // "Mrs. Kate Smith"
user1.canVote(); // true

const user2 = new User("Alex", "Green", "Mr", 17);
user2.getFullName(); // "Mr. Alex Green"
user2.canVote(); // false




// Определите необходимые классы, чтобы мы могли запустить код ниже:
// Класс `User` должен иметь два метода экземпляра:
// - `canVote()` возвращает `true`, если возраст пользователя 18 лет и старше
// - `getFullName()` возвращает имя и фамилию, разделенные пробелом
// Класс `Admin` должен иметь 3 метода экземпляра:
// - `canVote()` возвращает `true`, если возраст пользователя 18 лет и старше
// - `getFullName()` возвращает имя и фамилию, разделенные пробелом, за которыми идет префикс `[admin]`
// - `updateConfig()` возвращает строку `"Config updated"`

// define classes here
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  canVote(){
    return this.age >= 18;
  }
}

class Admin extends User {
  getFullName() {
    return `${this.firstName} ${this.lastName} [admin]`;
  }

  updateConfig(){
    return "Config updated";
  }
}

// // Sample usage - do not modify
const user = new User("Sam", "Green", 17);
user.canVote(); // false
user.getFullName(); // "Sam Green"

const admin = new Admin("Alex", "Blue", 20);
admin.canVote(); // true
admin.getFullName(); // "Alex Blue [admin]"
admin.updateConfig(); // "Config updated"





// Каждый мобильный телефон принимает параметры `name` и `price` и должен иметь два метода:
// - `getDescription()` возвращает строку, описывающую телефон
// - `getVersion()` всегда равен 12 для телефонов Android. Для телефонов iOS равен 15

// define classes here
class Phone {
  constructor(name, price, number){
    this.name = name;
    this.price = price;
    this.number = number;
  }

  getDescription(){
    return `The ${this.name} costs ${this.price}`;
  }

  getVersion(){
    return `${this.number}`;
  }
}

class Android extends Phone {
  getVersion(){
    return `${this.number} (always for android phones)`;
  }
}

class iOS extends Phone {
  getVersion(){
    return `${this.number} (always for iOS phones)`;
  }
}

class Symbian extends Phone {
  getVersion(){
    return `${this.number} (always for Symbian phones)`;
  }
}

// Sample usage - do not modify
const galaxy = new Android("Galaxy", 400, 12);
galaxy.getDescription(); // "The Galaxy costs 400"
galaxy.getVersion(); // 12 (always for android phones)

const iphone = new iOS("iPhone", 500, 15);
iphone.getDescription(); // "The iPhone costs 500"
iphone.getVersion(); // 15 (always for iOS phones)

const nokia = new Symbian("Nokia", 200, 8);
nokia.getDescription(); // "The Nokia costs 200"
nokia.getVersion(); // 8 (always for Symbian phones)





// Необходимо отрефакторить класс `Admin`, чтобы он принимал четвертый параметр с именем `userType`. Например, `const admin = new Admin("Alex", "Blue", 20, "admin")`. 
// Метод `getFullName()` захардкоден, т.к. в конце всегда возвращает строку `[admin]`. Вместо этого вам необходимо вернуть тип пользователя, полученного из параметра.

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}


class Admin extends User {
  constructor(firstName, lastName, age, userType){
    super(firstName, lastName, age);
    this.userType = userType;
  }

  getFullName() {
    return `${super.getFullName()} [admin]`;
  }

  updateConfig() {
    return "Config updated";
  }
}


// Sample usage - do not modify
const user = new User("Sam", "Green", 17);
user.canVote(); // false
user.getFullName(); // "Sam Green"

const admin = new Admin("Alex", "Blue", 20, "superadmin");
admin.canVote(); // true
admin.getFullName(); // "Alex Blue [admin]"
admin.updateConfig(); // "Config updated"




// Завершите функцию конструктора User, чтобы она записывала параметры конструктора как переменные экземпляра. Также завершите методы getFullName() и canVote().

/**
 * Constructor function
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 */
function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// // This has to be a function (not an arrow function)
User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// // This has to be a function (not an arrow function)
User.prototype.canVote = function() {
	return this.age >= 18;
}


// // Sample usage (do not modify)
const user = new User("Sam", "Blue", 43);
user.getFullName(); // "Sam Blue"
user.canVote(); // true

