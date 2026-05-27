class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // "static" is used to prevent the access of the method 
    static createId(){
        return `123`
    }
}

const userOne = new User("hardik")
// console.log(userOne.createId())      can't access that method

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const faculty = new Teacher("jogesh", "abc@gmail.com")
faculty.logMe()
