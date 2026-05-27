function multipleBy(num){
    return num * 5
}
// In JavaScript, functions are also objects
// So we can add custom properties to them
multipleBy.power = 2
console.log(multipleBy(5));     
// Accessing custom property added to function
console.log(multipleBy.power);  
// Every function automatically gets a prototype object
console.log(multipleBy.prototype);



// Constructor Function
// Used to create multiple user objects
function createUser(username, score){
    // 'this' refers to the new object being created
    this.username = username
    this.score = score
}
// Adding method to prototype
createUser.prototype.increment = function(){
    this.score++
    console.log(`Updated score is ${this.score}`);
}
// Another shared method using prototype
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const john = new createUser("john", 40)
const ricky = new createUser("ricky", 70)
// Calling shared prototype method
john.printMe()
ricky.increment()