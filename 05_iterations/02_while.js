// 1. Simple while loop
let i = 0
while (i <= 10) {                           // condition checks before loop execution
    console.log(`value of index is ${i}`);
    i=i+2
}


// 2. while loop for array
const myArr = ["flash", "batman","superman"]
let index=0
while (index<myArr.length) {
    console.log(`Hero is ${myArr[index]}`);
    index++
}


// 3. do while loop
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);                    // condition checks after loop execution