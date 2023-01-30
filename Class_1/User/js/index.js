// /* index.js */
import User from "./user.js";

// // class usage
const sam = new User("Sam", "Blue", 49);
console.log(sam);
console.log(sam.getFullName());
console.log(sam.getInitials());
console.log(sam.canVote());

console.log("---");

const charlie = new User("Charlie", "Doe", 13);
console.log(charlie);
console.log(charlie.getFullName());
console.log(charlie.getInitials());
console.log(charlie.canVote());