# JavaScript and Classes

# OOP (Object Oriented Programming)

OOP is a programming style where we organize code into **objects**.  
Objects contain:

- **Properties** → data/values
- **Methods** → functions/actions

Example:

```javascript
const user = {
    name: "Love",
    age: 20,

    greet: function(){
        console.log("Hello");
    }
}
```

Here:

- `name` and `age` → properties
- `greet()` → method

---

# What is an Object?

An object is a collection of:

- properties
- methods

Example:

```javascript
const car = {
    brand: "BMW",
    color: "Black",

    start: function(){
        console.log("Car Started");
    }
}
```

---

# Built-in Objects in JavaScript

JavaScript already provides many objects.

Example:

```javascript
const name = "LOVE"

console.log(name.toLowerCase());
```

`toLowerCase()` is a built-in method of the `String` object.

---

# Why Use OOP?

OOP helps to:

- organize code better
- reuse code
- make code cleaner
- make large projects easier to manage
- reduce repetition

Without OOP:

```javascript
const user1 = "Love"
const user2 = "Rohin"
```

With OOP:

```javascript
const user = {
    name: "Love",
    login: true
}
```

Everything stays organized inside objects.

---

# Parts of OOP in JavaScript

---

# 1. Object Literal

Directly creating objects using `{}`

```javascript
const user = {
    username: "Love",
    loginCount: 8,

    signedIn: true
}
```

Access values:

```javascript
console.log(user.username);
```

---

# 2. Constructor Function

Used to create multiple objects easily.

```javascript
function User(username, loginCount, isLoggedIn){

    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Love", 12, true)
const userTwo = new User("Rohin", 5, false)

console.log(userOne);
```

---

## `this` Keyword

`this` refers to the current object.

```javascript
this.username = username
```

Means:

```javascript
userOne.username = "Love"
```

---

## `new` Keyword

`new` creates a new object instance.

```javascript
const userOne = new User()
```

Steps:

1. New empty object created
2. `this` connects to object
3. Values assigned
4. Object returned

---

# 3. Prototypes

JavaScript uses prototypes for inheritance.

A prototype allows sharing methods between objects.

```javascript
function User(name){
    this.name = name
}

User.prototype.greet = function(){
    console.log(`Hello ${this.name}`);
}

const user1 = new User("Love")

user1.greet()
```

Why use prototype?

- saves memory
- method is shared
- not recreated every time

---

# 4. Classes

Modern way of writing OOP.

Classes are syntactic sugar over prototypes.

```javascript
class User{

    constructor(username, email){
        this.username = username
        this.email = email
    }

    greet(){
        console.log(`Hello ${this.username}`);
    }
}

const user1 = new User("Love", "love@gmail.com")

user1.greet()
```

---

# 5. Instances

Objects created from constructor/class are called instances.

```javascript
const user1 = new User()
```

`user1` is an instance of `User`.

---

# 4 Pillars of OOP

---

# 1. Abstraction

Hiding unnecessary details and showing only important features.

Example:

```javascript
class CoffeeMachine{

    start(){
        console.log("Machine Started");
    }

    brewCoffee(){
        console.log("Coffee Ready");
    }
}

const coffee = new CoffeeMachine()

coffee.start()
```

User only uses buttons.  
Internal machine working is hidden.

---

# 2. Encapsulation

Wrapping data and methods together and restricting direct access.

```javascript
class BankAccount{

    #balance = 0

    deposit(amount){
        this.#balance += amount
    }

    getBalance(){
        return this.#balance
    }
}

const user = new BankAccount()

user.deposit(500)

console.log(user.getBalance());
```

`#balance` cannot be accessed directly.

---

# 3. Inheritance

One class can use properties and methods of another class.

```javascript
class User{

    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(this.username);
    }
}

class Teacher extends User{

    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("Love", "love@gmail.com")

teacher.logMe()
```

`Teacher` inherited from `User`.

---

# 4. Polymorphism

Same method behaves differently in different classes.

```javascript
class Animal{
    sound(){
        console.log("Animal makes sound");
    }
}

class Dog extends Animal{
    sound(){
        console.log("Dog barks");
    }
}

class Cat extends Animal{
    sound(){
        console.log("Cat meows");
    }
}

const dog = new Dog()
dog.sound()

const cat = new Cat()
cat.sound()
```

Same method name → different behavior.

---

# Important Notes

## JavaScript is Prototype-Based

Unlike some languages, JavaScript works mainly using prototypes behind the scenes.

Classes are just a cleaner syntax.

---

# Quick Revision Table

| Concept | Meaning |
|---|---|
| Object | Collection of properties and methods |
| Method | Function inside object |
| Constructor Function | Creates multiple objects |
| `this` | Refers to current object |
| `new` | Creates new instance |
| Prototype | Shared methods |
| Class | Modern OOP syntax |
| Instance | Object created from class |
| Abstraction | Hide details |
| Encapsulation | Protect data |
| Inheritance | Reuse code |
| Polymorphism | Same method, different behavior |

---

# Simple Real-Life Analogy

## Car Example

### Class

Blueprint of car.

### Object / Instance

Actual car made from blueprint.

### Encapsulation

Engine details hidden.

### Inheritance

Electric car inherits from car.

### Polymorphism

Different cars start differently.

---

# Final Understanding

In JavaScript:

- Everything revolves around objects
- OOP helps manage large applications
- Classes are easier syntax for prototypes
- `this`, `new`, and prototypes are core concepts
- 4 pillars make code reusable and maintainable