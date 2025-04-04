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

console.log(loginMessage("Ayush"))


function loginMessage1(username= "ash"){               //if no value is passed while calling the function then sam just logged in will be returned
    if(username=== undefined){                           // can also write - if(!username){
        console.log("Please enter a username");
        return 
    }    
    return `${username} just logged in`
}

console.log(loginMessage1("Ayush"))