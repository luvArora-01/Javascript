// Object can be declared by two types::-

// 2. Constructor [ Object() ]

const tinderUser = new Object()       // singleton object
const tinderUser1 = {}               // non singleton object
// both gives empty object 
console.log(tinderUser);
console.log(tinderUser1);


console.log(tinderUser);
console.log(Object.keys(tinderUser));                   // gives keys
console.log(Object.values(tinderUser));                 // gives values
console.log(Object.entries(tinderUser));                // gives key:value in array inside array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // to check object have that key or not


// adding the key:value in the object
tinderUser.id = "123@ABC"
tinderUser.name = "John"
tinderUser.isLoggedIn = false
// accessing the object
console.log(tinderUser);

// nested objects
const regularUser = {
    email:"user@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Love",
            lastName:"Love"
        }
    }
}
console.log(regularUser.fullname.userFullName);

// combining two objects:-

// 1. Assign Method is used to combine the objects( {} => is for the new or targeted object and else are source )
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

// 2. Spread Operator
const objA = {1:"ab",2:"bc"}
const objB = {3:"cd",4:"de"}
const objC = {...objA,...objB}
console.log(objC);


// array with object in it
const users = [
    {
        id:1,
        email:"user1@gmail.com"
    },
    {
        id:2,
        email:"user2@gmail.com"
    },
    {
        id:3,
        email:"user3@gmail.com"
    },
]
console.log(users);