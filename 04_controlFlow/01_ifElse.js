// 1. if

    // # syntax:-
    // if (condition) {
        
    // }
const isUserloggedIn = true
if(isUserloggedIn){
    console.log(`login successfully.`);
}

/* (===)Strict equality operator is used to compare two values for equality, 
and it only returns true if both the value and the data type of the 
operands are exactly the same*/


// 2.
if(2==="2"){                        
    console.log("executed");            // gives nothing 
}
if(2!=3){
    console.log("execute");
}


// 3. If else

    // # syntax:-
    // if (condition) {
    
    // } else {
    
    // }

const temp = 41
if(temp<50){
    console.log("Temp is lesser than 50");
}
else{
    console.log("Temp is greater than 50");
}


// 4.
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);            // will not be execute as power is defined inside the block 


// 5. Without block
const balance = 1000
if(balance>500) console.log("test");


// 6. Nested
if(balance<500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750");
}
else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}


// 7. AND(&&) and OR(||) Operator
const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

// 8. Nullish Coalescing Operator(??): null and undefined
let val1;
val1 = 5 ?? 10              // gives first value
val1 = null ?? 10           // gives value other than null
val1 = undefined ?? 15      // gives value other than undefined
val1 =  null ?? 50 ?? 30
console.log(val1);


// 9. Terinary Operator
// condition ? true:false
const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80")


// # false values:-

    // false
    // 0
    // -0
    // BigInt
    // 0n
    // ""
    // null
    // undefined
    // NaN

// # true values:-

    // "0"
    // 'false'
    // " "
    // []
    // {}
    // function(){}


// if else for empty STRING
const userEmail = "user@email.ai"
if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// if else for empty ARRAY
const userGmail = []
if (userGmail.length===0){
    console.log("Array is empty");
}

// if else for empty OBJECT
const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}