const user = {
    username: "Ayush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)        // this - refers to the current context {}
    }
}    

// user.welcomeMessage()

function chai(){
        let username = "hitesh"
        console.log(this.username);      //cannot use function inside this; it will give undefined
    }
    
// chai() 

const chai1 = () => {
    let username = "hitesh"
    console.log(this.username)
}    

// chai1()

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo1 = (num1, num2) =>  (num1 + num2)      // implicit type to return the function