/* index.js */
import User from "./user.js";

// your code



// do not modify
const user = new User('Sam', 'Smith', 30);
console.log(user); // User {firstName: 'Sam', lastName: 'Smith', age: 30}

const writer = new Writer('Tom', 'Roth', 20);
console.log(writer); // Writer {firstName: 'Tom', lastName: 'Roth', age: 20}
console.log(writer.publishArticle()); // Article published