//singleton - when we declare objects using literals, then object is not singleton (singleton - the object has only one instance )
// when it is created using constructor then object is singleton   e.g. Object.create 

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                 // use of symbol in terms key and value 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) full name can be accessed using this method only [] 
// [] method is preferred more 
    
JsUser.email = "hitesh@chatgpt.com"        // changes the value of email 
// Object.freeze(JsUser)                      // freezes the object and value cannot be changed further
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());        // prints hello js user
console.log(JsUser.greeting);        // gives fuction returnback; function is not excuted only its reference is returned
console.log(JsUser.greetingTwo());

