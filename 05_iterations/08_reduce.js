// REDUCE::-
/* executes a "reducer" callback function on each element of an array,
resulting in a single output value. */

// simple function
const nums = [1,2,3]
const total = nums.reduce(function(accumulator, currentValue){
    console.log(`acc:: ${accumulator} and  cur:: ${currentValue}`);
    return accumulator + currentValue
},0)
console.log(total);


// arrow function
const num = [1,2,3,4]
const myTotal = num.reduce((acc,cur)=>{
    return acc+cur
},0)
console.log(myTotal);


// example:-
const shoppingCart = [
    {
        itemName: 'development course',
        price:12999
    }, 
    {
        itemName: 'python course',
        price:2999
    }, 
    {
        itemName: 'cpp course',
        price:2599
    }, 
    {
        itemName: 'java course',
        price:3999
    }, 
]
const priceToPay = shoppingCart.reduce((acc,item)=> acc+ item.price,0)
console.log(`₹${priceToPay}/-`);
