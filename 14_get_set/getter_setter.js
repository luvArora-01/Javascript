class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    // setter
    set email(value){
        this._email = value
    }
    // getter
    get email(){
        return this._email.toUpperCase()
    }
    // setter
    set password(value){
        this._password = value
    }
    // getter
    get password(){
        return `${this._password}love`
    }
}

const love = new User("love@gmail.com", "abc321")
console.log(love.email);            // get email() runs automatically.
console.log(love.password);