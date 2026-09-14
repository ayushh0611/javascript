//some loops are added in arrays directly into the properties

//forEach - it is an array method that accepts function as an argument, used to iterate over arrays
//callback fn - we dont provide function name while declaring it 

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val); 
// } )

//using forEach with help of arrow function-

// coding.forEach( (item) => {
//     console.log(item);
// } )

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//most important - how to access objects inside an array -
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

