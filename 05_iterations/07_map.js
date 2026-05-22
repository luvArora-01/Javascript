// Map::-
/* It creates a new array by applying a function 
to each element of the original array without changing the original. */

// (a) for array
const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.map((num)=> num+10)
console.log(newNum);

// chaining of methods
const nums = [1,2,3,4,5,6,7,8,9,10]
const newNums = nums
            .map((num) => num*10)
            .map((num)=>num+7)
            .filter((num)=>num>=37)
console.log(newNums);