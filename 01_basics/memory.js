/* stack (primitive datatypes go inside stack), heap (non-primitive datatypes go inside heap)
in stack it gives a copy keeping the original value unchanged while in heap it gives reference and the original value also gets changed if any changes are made in the second variable */

let myName = "Ayush"
let anotherName = myName
anotherName="Rajvansh"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "ayush@google.com"  // . is used for accessing in objects

console.log(userOne);
console.log(userTwo);
console.log(userOne.email) 