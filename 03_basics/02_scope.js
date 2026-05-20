// Scope are of two types::-

// 1. Global Scope

var a=60                    // this can access anywhere
{
    a=50
    // console.log(a);
}


// 2. Block Scope 
{
    let b=20                // these can only be access in block
    const c=40
}
//console.log(b);             // b is not defined
//console.log(c);             // c is not defined

// 3. Nested Scope


// functions

function one(){
    const userName = "john"
    function two(){
        const website = "youtube"
        console.log(userName);          // Accessible because inner functions can access outer variables
    }
    // console.log(website);       // Not accessible because outer functions can access inner variables
    two()
}
one()

// if else

if(true){
    const userName = "virat"
    if(userName==="virat"){
        const website = " youtube"
        console.log(userName + website);
    }
    //console.log(website);         // non accessible
}
//console.log(userName);          // non accessible