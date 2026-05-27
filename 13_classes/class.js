// using class
class User{
    // whenever object will initialize then constructor will be called automatically.
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const userOne = new User("suresh","suresh@gmail.com","123")
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

// behind the scene

// using function
// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }
// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }
// const userOne = new User("suresh","suresh@gmail.com","123")
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());