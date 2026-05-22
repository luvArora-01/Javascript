// for each loop

// (a) for array with string
const coding = ['js','ruby','java','python','cpp']
console.log('for array with string');

// callback function (do not have name)
console.log('1. callback function');
coding.forEach(function(val) {
    console.log(val);
});


// arrow function
console.log('2. arrow function');
coding.forEach(arr=>{
    console.log(arr);
});
console.log('2.1 different parameters');
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

// reference function
console.log('3. reference function');
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

// (b) for array with object
console.log('for array with object');
const languages = [
    {
        langName:'js',
        fileName:'javascript'
    },
    {
        langName:'cpp',
        fileName:'c++'
    },
    {
        langName:'py',
        fileName:'python'
    },
]
languages.forEach((obj)=>{
    console.log(obj);
    console.log(obj.langName);
    console.log(obj.fileName);
})



// for each loop do not return anything,
// only gives undefined when stored in a variable
const coding = ['js','ruby','java','python','cpp']
const values = coding.forEach( (item)=>{
    console.log(item);
    return item 
});
// console.log(values);