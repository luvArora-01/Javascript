/* Function:: a reusable block of code designed to perform 
a specific task */

// 1.

function sayMyName(){
    console.log("L");
    console.log("O");
    console.log("V");
    console.log("E");
}
// sayMyName                 reference    
// sayMyName()               execute
sayMyName()


// 2.

function addNums(num1,num2){            // "num1,num2 are parameters"
    console.log(num1+num2);
}
// addNums()                    gives NaN as argument are not passed
addNums(2,4)                // "2,4 are arguments" gives 6
const result1 = addNums(9,7)
console.log("Result: ", result1);       // Result:  undefined


// 3.

function subNums(n1,n2){            // "num1,num2 are parameters"
    let result2 = n1-n2
    return result2
    // console.log("love");           unreachable code after "return"
    
}
const result2 = subNums(9,7)
console.log("Result: ", result2);        // Result:  2


// 4.

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("love"));
console.log(loginUserMessage(""));          // empty string
console.log(loginUserMessage());            // undefined


// 5.

// "..." rest operator used to get all the arguments in a packet or array
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,700,800,500));


// 6. object in Function

//object
const user = {
    userName: "john",
    price:"199"
};
//function
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// printing object
handleObject(user)
handleObject({
    userName:"sam",
    price:"999"
})


// 7. Array in Function

//array
const newArr = [200,300,500,900]
//function
function returnValue (getArr){
    return `Array value is ${getArr[1]}`
}
// printing Array
console.log(returnValue(newArr));


