// Types of Function::-

// 1. Function
console.log(addOne(5))          // can be hoisted
function addOne(num){           
    return num + 1
}

// 2. Expression function
// console.log(addTwo(5))           // can't be hoisted
const addTwo = function(num){           
    return num+2
}
addTwo(5)


// THIS KEYWORD
const user = {
    userName:"Virat",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`);        // "this" keyword:: a reference to an object
        console.log(this);            // gives object(here, user)
        
    }
}
user.welcomeMessage()

console.log(this);         // gives empty object


// function chai(){
//     let userName = "rohit"              // "this" should not be used in functions
//     console.log(this.userName);             // undefined
// }
// chai()


// 3. Arrow Function  ()=>{}
const chai = () => {
    let userName = "rohit"
    console.log(userName);
}
chai()

// explicit return
const addNum = (num1,num2) => {
    return num1+num2
}
console.log(addNum(7,9));

// implicit return
const subNum = (numA,numB) => numA+numB
console.log(addNum(3,4));

// object in arrow function
const Myobj = () => ({userName:"kl rahul"})
console.log(Myobj());