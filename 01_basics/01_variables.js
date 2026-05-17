const accountId = 67234378               // const have block scope {}
let accountEmail = "love@gmail.com"     // let have block scope {}
var accountPassword = "123456"         // var have global or functional scope
accountCity = "Mumbai"                // should not use this way
let accountState;                    // undefined
let accountCountry=null             // null


//const accountId = 87345678                // const cannot be re-declared
//let accountEmail = "luv1@gmail.com"      // let cannot be re-declared 
var accountPassword = "6543212345"        // var can be re-decalred
accountCity= "Noida"                     // can be re-decalred

//accountId = 2                      // const cannot be reassign
accountEmail = "luv@gmail.com"      // but let can be reassign 
accountPassword = "654321"         // var can be reassign
accountCity = "Pune"              // can be reassign

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState,accountCountry])    //tabular form

/*
Prefer not to use VAR
because of issue in block scope and functional scope
*/