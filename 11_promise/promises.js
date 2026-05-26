// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// * pending:: initial state, neither fulfilled nor rejected.
// * fulfilled:: meaning that the operation was completed successfully.
// * rejected:: meaning that the operation failed.

// fetch('https://something.com').then().catch().finally()

// promise => .then => .catch => .finally

// 1. Promise One
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    setTimeout(function(){
        console.log('Async task is Complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('Promise Consumed');
})


// 2. Promise Two
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task again');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})


// 3. Promise Three
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "love-arora", email: "love@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})


// 4. Promise Four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: "rocky", password: "1234"})
        }
        else{
            reject("ERROR: Something went wrong!!")
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.userName
})
.then((userName) => {
    console.log(userName);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resloved or rejected"))


// 5. Promise Five
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: "javascript", password: "123"})
        }
        else{
            reject("ERROR: JS went wrong!!")
        }
    },1000)
    
})

// # ASYNC AWAIT
// async => await => .try => .catch
// (can't handle errors directly)
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } 
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()


// ## async function to get details from api
// async function getAllUsers(){
//     try{
//         // fetch
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()        // must use "await" here as well to process the incoming data  
//         console.log(data);
//     } 
//     catch(error){
//         console.log(`Error:: ${error}`);
//     }
// }
// getAllUsers()

// same using then catch finally
fetch('https://api.github.com/users/luvArora-01')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))
.finally(() => {console.log(`Data fetching finished`)})