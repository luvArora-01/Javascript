// # FILTER (it returns values) :-
//  => creates a new array containing only the elements that pass a specific test
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.filter((num) => {
    return num>5
})
console.log(newNum);
// or
const newNums = myNums.filter((num) => num>4)
console.log(newNums);


// condition check in for each loop
const counts = [1,2,3,4,5,6,7,8,9,10]
const nums = []
counts.forEach((num)=>{
    if(num>7){
        nums.push(num)
    }
})
console.log(nums);


// Filter
const books = [
    { title:'Book One', genre:'Friction', publish:'1981',
    edition:'2004' },
    { title:'Book Two', genre:'Comic', publish:'2011',
    edition:'2016' },
    { title:'Book Three', genre:'History', publish:'1992',
    edition:'2005' },
    { title:'Book Four', genre:'Science', publish:'1985',
    edition:'2003' },
    { title:'Book Five', genre:'Non-Friction', publish:'1981',
    edition:'2004' },
    { title:'Book Six', genre:'Comic', publish:'2002',
    edition:'2008' },
    { title:'Book Seven', genre:'Non-Friction', publish:'2001',
    edition:'2015' },
    { title:'Book Eight', genre:'History', publish:'1985',
    edition:'2003' },
]
let userBooks = books.filter((bk)=> bk.genre === 'History')
console.log("History books:",userBooks);
userBooks = books.filter((bk)=> bk.publish >= '2000')
console.log("Books publish after year '2000':",userBooks);
userBooks = books.filter((bk)=> bk.publish >= '1999' && bk.genre === 'Comic')
console.log("Books publish after year '1999' and have 'comic' genre:",userBooks);
userBooks = books.filter((bk)=> bk.edition >= '2007' || bk.genre === 'Non-Friction')
console.log("Books edition after year '2007' or have 'comic' genre:",userBooks);