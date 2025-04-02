const myArr = [0,1,2,3,4,5]
// console.log(myArr)               //arrays create shallow copy meaning whatever we change in array while creating a copy; the changes also take place in original array
const myArr1= new Array(1,2,3,4,5)   //another way of creating an array

// myArr.push(6)           // adds the element at last
// myArr.push(7)
// myArr.pop()             //pops out the last element

// myArr.unshift(10)          // adds element at the starting 
// myArr.shift()             // removes the first element
// console.log(myArr);

// console.log(myArr.includes(9))              // returns true or false
// console.log(myArr.indexOf(2))        //returns index of the value passed or -1

// const newArr = myArr.join()          //binds the array and converts it into string 

// console.log(myArr);
// console.log( newArr);


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)    

console.log(myn1);
console.log("array after slicing ", myArr);


const myn2 = myArr.splice(1, 3)         //The splice() method adds and/or removes array elements. The splice() method overwrites the original array.    
console.log(myn2)
// splice syntax - splice(start, deleteCount, item1, item2)
//will return the spliced part
console.log("array after splicing ", myArr);