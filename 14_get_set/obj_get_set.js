const User = {
    _email: 'arun@ai.com',
    _password: '54321qwert',

    set email(value){
        this._email = value
    },
    
    get email(){
        return this._email.toUpperCase()
    },

    set password(value){
        this._password = value
    },
    
    get password(){
        return this._password.toUpperCase()
    }
}

const newUser = Object.create(User)
console.log(newUser.email);
console.log(newUser.password);