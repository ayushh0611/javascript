//to iterate over objects we use for in


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key);
}
for (const key in myObject) {
    console.log(myObject[key]);
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming1 = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {              //iterating arrays using for in returns key in numeric e.g. 0,1,2,3 form whereas usign for of returns directly the value
    //console.log(key);                      //this returns only keys like 0,1,2,3
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {              //iterating arrays using for in returns key in numeric e.g. 0,1,2,3 form whereas usign for of returns directly the value
    //console.log(programming[key]);          //this returns values 
}
