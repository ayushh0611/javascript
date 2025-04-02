// const tinderUser = new Object()      // singleton object as it is declared using constructor 
const tinderUser = {}                // non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // .assign(target, source)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));         //returns array of keys
// console.log(Object.values(tinderUser));       //returns array of values 
// console.log(Object.entries(tinderUser));      //returns both keys and values

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));       //true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}    

// course.courseInstructor      // accessing courseinstructor

const {courseInstructor: ins} = course       // object destructure for accessing
console.log(ins)