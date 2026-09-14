// for of                 - no need of increment/decrement 
// basic syntax-
// for (const element of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]       objects inside array 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps         key-value pairs, only allows unique values 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const key of map) {
    // console.log(key);          //this returns array of key value pairs
}
for (const [key, value] of map) {
    // console.log(key, ':-', value);              //used to return key and value seperately by destructuring the array
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {                   //objects are not iterable using for of 
//     console.log(key, ':-', value);
    
// }