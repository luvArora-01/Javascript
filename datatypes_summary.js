
/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
*/



// # Primitive Datatypes

    // 7 types:-

    // 1. String
const userName = "LOVE ARORA"

    // 2. Number
const userAge = "21"

    // 3. Boolean
const isLoggedIn = true

    // 4. Null
const outTemp = null

    // 5. Undefined
let userEmail;

    // 6. Symbol
const mySymbol = Symbol('123')

    // 7. BigInt
const bigNumber = 4532878337892379856n


// # Reference(Non-Primitive) Datatypes

    // 3 types:-

    // 1. Array
const heros = ["superman", "ironman" , "batman"];

    // 2. Objects
let myObj = {
    name: "Love",
    age: 22
};

    // 3. Functions
const myFunction = function(){
    console.log("Hello World");
}


// # To check type of any variable use (typeof)

// console.log(typeof Undefiend);           //undefined
// console.log(typeof Null);               //object
// console.log(typeof Boolean);           //boolean
// console.log(typeof Number);           //number
// console.log(typeof String);          //string
// console.log(typeof Symbol);         //symbol
// console.log(typeof array);         //object
// console.log(typeof object);       //object
// console.log(typeof function);    //function








/********************* MEMORIES ******************/

// TYPES:-

// 1. Stack (Primitive)
// 2. Heap (Non-Primitive)

let myName = "Love Arora"
let anotherName = myName
anotherName = "luv"
console.log(myName);
console.log(anotherName);



let userOne = {
    email:"user@gmail.com",
    upi: "user@ptsbi"
};

let userTwo = userOne
userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);
