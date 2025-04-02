let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);          //object

let myCreatedDate = new Date(2023,0,23)
let myNewDate = new Date(2023,0,23,5,3)
let myFormatDate = new Date("1-12-2024")       //ddmmyyyy format
// console.log(myCreatedDate.toDateString());
// console.log(myNewDate.toLocaleString());
// console.log(myFormatDate.toLocaleString());

let myTimeStamp = Date.now()            //gives milisecond passed from 01 jan 1970
// console.log(myTimeStamp) 
// console.log(myCreatedDate.getTime());   //gives milisecond passed from 01 jan 1970 to the date provided
// console.log(Math.floor(Date.now()/1000));    // / by 1000 to get time in seconds
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}))