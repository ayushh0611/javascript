// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));       //2- kitne decimal tk value chayiye

// const num1= 23.8966
// console.log(num1.toPrecision(3));
// console.log(num1.toPrecision(2));

// const num2=123.8996
// console.log(num2.toPrecision(3));

// const num3=1123.8996
// console.log(num3.toPrecision(3))      //precise to 3 and rest in exponential

const num4 = 1000000
console.log(num4.toLocaleString());
console.log(num4.toLocaleString('en-In'));


// *****************  MATHS  *********************//

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));         //5 agr .1 bhi jayda h 4 se
// console.log(Math.floor(4.9));        // 4 hi aaega
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());     // will always give value between 0 and 1 and always a different value

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)