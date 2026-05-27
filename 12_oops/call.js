function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    // ".call(this, args)" calls and holds the properties of the "SetUsername" constructor.
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const userOne = new createUser("johnny", "john@gmail.com", "1234")
console.log(userOne);
