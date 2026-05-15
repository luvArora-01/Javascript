

// NUMBER

console.log("01). NUMBER CONVERSION")
let score = "33"

let valueInNumber = Number(score) 
console.log(valueInNumber);            // 33
console.log(typeof valueInNumber);    // number

// "33" ==> 33
// "33abc" ==> NaN
// null ==> 0
// undefined ==> NaN
// true => 1 , false => 0



// BOOLEAN

console.log("02). BOOLEAN CONVERSION")
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)               // true
console.log(typeof booleanIsLoggedIn)       // boolean

// 1 => true, 0 => false
// "" => false 
// "love" => true



// STRING

console.log("03). STRING CONVERSION");
let someNumber = 45

let stringNumber = String(someNumber)
console.log(someNumber)                     // 45
console.log(typeof stringNumber)           // string


// 45 ==> "45"
// null ==> "null"
// undefined ==> "undefined"




//OBJECT

console.log("04). OBJECT CONVERSION");
let age = "33"

let valueInObejct = Object(age) 
console.log(valueInObejct);             // [String: '33']
console.log(typeof valueInObejct);     // object




/*********************OPERATIONS******************/

let num1 = 3 
let negValue = -num1
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%4);



let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + 2 + "3" + 4);
console.log("1" + 2 + 2);
