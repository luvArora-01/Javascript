// Array Declaration

const myArr = [7,9,2,4,5]
const myArr1 = [4,7,3,5,'love',true]
const myArr2 = ['superman','batman','ironman']
const myArr3 = new Array(2,3,4,5)


// Array Methods

// 1.  Push
myArr.push(6)                // add element in the end 
console.log(myArr);

// 2. Pop
myArr.pop()                // remove last element
console.log(myArr);

// 3. Unshift
myArr.unshift(9)                // insert element in the start
console.log(myArr);

// 4. Shift
myArr.shift()                // remove element from the start
console.log(myArr);

// 5. Includes
console.log(myArr.includes(5));             // boolean answer for the existence of element

// 6. IndexOf
console.log(myArr.indexOf(10));             // remove element from the start

// 7. Join
const newArr = myArr.join()            // converts the array into the string
console.log(newArr);                  // string

// 8. Slice
console.log("A::", myArr);

const myn1 = myArr.slice(1,3)         // last element do not include
console.log(myn1);

console.log("B::", myArr);

// 9. Splice
console.log("A::", myArr);

const myn2 = myArr.splice(1,3)         // includes the last element
console.log(myn2);

console.log("B::", myArr);            // gives the leftover elements