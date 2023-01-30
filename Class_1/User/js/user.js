// Реализуйте следующие методы экземпляра для класса `User`:

// - `getFullName` возвращает имя и фамилию пользователя, разделенные пробелом
// - `getInitials` возвращает первый символ имени, сразу за которым следует первый символ фамилии
// - `canVote` возвращает `true`, когда пользователю исполнилось 18 лет или больше, и `false` в противном случае


export default class User {
	constructor(firstName, lastName, age){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	getFullName(){
		return `${this.firstName} ${this.lastName}`;
	}

	getInitials(){
		return `${this.firstName[0]}${this.lastName[0]}`;
	}

	canVote(){
		return this.age >=18;
	}
}