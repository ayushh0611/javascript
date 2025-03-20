// kis tarah se data ko memory me rkha jaata h aur access kiya jaata h uske basis pe data ki 2 categories hain - 
//primitive -
// 7 types - string,number,boolean,null,undefined,symbol(to make any value unique, symbol is used), bigInt

//JavaScript (JS) is a dynamically typed language, meaning the type of a variable is determined at runtime, not during compilation
//e.g. const score = 100
// we dont write - const score: number =100 i.e. we do not define the datatype while declaring a variable

// declaration of symbol example-
const id =Symbol("123")
const id2=Symbol("123")

// it can contain same value but it will be considered not equal

console.log(id===id2)

//Reference type or non primitve-
// array,objects, functions


const heroes = ["ajay","vijay","mithun"]
let myObj= {name:"hitesh",age:19}

const myFunction= function(){
    console.log("Hello world")
}    


/*Return type of variables in JavaScript
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function object
Object  =>  object
*/