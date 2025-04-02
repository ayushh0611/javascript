const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     //joins both the arrays but takes the second array as a single element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);      // combines the arrays in a new array without modifying the existing ones

const all_new_heros= [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);         //used when all elements from an object or array need to be included in a new array or object,

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)            //flat returns a new array with all sub array elementts together
// console.log(real_another_array);          


console.log(Array.isArray("Hitesh"))           //checks whether value is array or not
console.log(Array.from("Hitesh"))              //converts given value into array
console.log(Array.from({name: "hitesh"})) // interesting   ; we need to tell array kiska banana h // output will be an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));            //.of returns new array from a set of elements