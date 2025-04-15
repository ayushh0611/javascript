//immediately invoked function expression - function that runs immediately when defined
// to remove the problem made by pollution of global scope

// (function chai(){
//     console.log(`DB connected`);
// })()                                   

// (function chai2(){
//     console.log(`DB connected 2`);
// })() 

// the above code will give error because after the execution of chai it doesnt know where to stop so semicolon should be used - 

(function chai(){                       //named iife 
    console.log(`DB connected`);
})();

(() => {                                //unnamed iife
    console.log(`DB connected 2`);
})();
    
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')