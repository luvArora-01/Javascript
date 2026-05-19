// Object can be declared by two types::-

// 1. Literals
const mySym = Symbol("key1")        // symbol declaration
const jsUser = {
    name:"Love",
    "full name": "Love Arora",      // key:value pair (both are string)
    [mySym]:"mykey",                 // syntax for Symbol 
    age:"21",
    location:"Noida",
    email:"love@google.com",
    isLoggedIn:true,
    lastLoginDays:["mon", "sat"]
};

// different types to access objects
console.log(jsUser.name);
console.log(jsUser["location"]);            // optimal way (with square bracket)
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

// change or update object values
jsUser.email = "love@gmail.com"
console.log(jsUser);

// To freeze and avoid change 
// Object.freeze(jsUser)
jsUser.email = "love@chatgpt.com"
console.log(jsUser);

// greeting using function
jsUser.greeting1 = function(){
    console.log("Hello JS User");
}
jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);         // this refer to the object
}
console.log(jsUser.greeting1);              // [Function (anonymous)]
console.log(jsUser.greeting1());
console.log(jsUser.greeting2());