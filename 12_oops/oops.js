
// object literal
// const user1 = {
//     userName: 'love',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         //console.log('Got user details from database');
//         //console.log(`Username: ${this.userName}`);
//         // console.log(this);
//     }
// }
// // console.log(user.userName);
// // console.log(user.getUserDetails());
// console.log(this);


// constructor function (new)
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greet = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this                     // not need as it implicitly returns
}
const userOne = new User("johnny", 12, true,)
const userTwo = new User("jimmy", 11, false)
userOne.greet()
console.log(userOne);
userTwo.greet()
console.log(userTwo);
