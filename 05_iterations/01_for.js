// 1. Simple for loop
for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(element);
}

// 2. for loop with if nested in it 
for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element === 5){
        console.log("5 is best element");
    }
    console.log(element);
}

// 3. nested for loop
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Loop value: ${j} and outer loop: ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
    }
}

// 4. for loop for array
const myArr = ["flash", "batman","superman"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}


// 5. break and continue keyword
for (let i = 0; i <= 20; i++) {
    if(i===5){
        console.log(`${i} Detected `);
        break                           // break and get out of the loop
    }
    console.log(`Value of i is ${i}`);
}
for (let i = 0; i <= 20; i++) {
    if(i===5){
        console.log(`${i} Detected `);
        continue                        // skips that iteration and then continue
    }
    console.log(`Value of i is ${i}`);
}