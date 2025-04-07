c= 300                               //global scope 

if (true) {
    let a = 10                        //local scope 
    const b = 20
    var c = 30    
}   

//let a = 10; and const b = 20; are block-scoped, which means they only exist inside the {} block of the if statement. Trying to access a or b outside of that block will throw a ReferenceError.

//var c = 30; is function-scoped, not block-scoped. Since there’s no function here, var c is hoisted to the global scope (or the enclosing function scope if it exists). So, console.log(c) will print 30

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){                         // this function can access variables of one()
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);                //cannot access website here 

     two()                   // returns hitesh

}

// one()


function addone(num){
    return num + 1
}
console.log(addone(5))



const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))



console.log(addone1(6))                      // can write like this
function addone1(num){
    return num + 1
}



console.log(addTwo1(5))                     //this will give error as we have hold the function in a variable
const addTwo1 = function(num){
    return num + 2
}
