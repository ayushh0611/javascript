// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(1,5)

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     // console.log("Ayush");                  //return ke baad jo bhi likhte h vo execute nahi hota 
    
// }
// const result= addTwoNumbers(2,5)

// console.log(result);

// function addTwoNumbers2(number1, number2){
//     return number1+number2
// }
// console.log(addTwoNumbers2(2,3))   

function loginMessage(username){
    if(username=== undefined){                           // can also write - if(!username){
        console.log("Please enter a username");
        return 
    }    
    return `${username} just logged in`
}

// console.log(loginMessage("Ayush"))


function loginMessage1(username= "ash"){               //if no value is passed while calling the function then ash just logged in will be returned
    if(username=== undefined){                           // can also write - if(!username){
        console.log("Please enter a username");
        return 
    }    
    return `${username} just logged in`
}

// console.log(loginMessage1("Ayush"))


function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500))

function calculateCartPrice1(...num1){                  // ... rest operator;The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
    return num1
}

// console.log(calculateCartPrice1(200,400,500))

const user = {
    username: "ayush",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

// instead of first creating the object in line 57, we could also pass the object directly while calling the function

// handleObject({
//     username: "Ayush",
//     price: 122
// })


const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){                   //getArray is not a keyword here, its a name given by us
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))

// same as object we can also directly pass the array

console.log(returnSecondValue([100,500,300]))