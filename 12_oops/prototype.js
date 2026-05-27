// simple way to remove whitespaces
let myName = "virat     "
console.log(myName.trim().length);


// creating our own method
let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// 1. creating method in object prototype
Object.prototype.loveObject = function(){
    console.log('Love is present in all object,array,string,function if we created an object prototype');
}
// can access the method in object
heroPower.loveObject()
// can access the method in array as well
myHeros.loveObject()


// 2. creating method in array prototype
Array.prototype.loveArray = function(){
    console.log('Love is only present in array if we is created an array prototype');
}
// can't access the method in object
// heroPower.loveArray()
// can access the method in array as well
myHeros.loveArray()


// ### older inheritance

const User = {
    name:'rohit',
    email:'rohit@google.com',
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssigment: "JS assignment",
    fullTime: true,
    // "__proto__" can inherit the properties from another object
    __proto__: TeachingSupport
}
console.log(TASupport.isAvailable);

// external prototypal inheritance
Teacher.__proto__ = User
console.log(Teacher.name);


// ### Modern Syntax for inheritance
Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TeachingSupport.makeVideo);


// # creating our own method to remove whitespaces
let Username = "varun   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // string do not have name property
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}
Username.trueLength()
'vickybadmos   '.trueLength()