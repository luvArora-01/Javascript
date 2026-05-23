# Projects related to DOM

## Project link
[Click Here](#)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'purple'){
            body.style.backgroundColor = event.target.id
        }
    })
});
```

## project 2

```javascript
const form = document.querySelector('form')
// this usercase will give you empty values
// const height = parseInt(document.querySelector('#height').value) 

form.addEventListener('submit',function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value) 
    const weight = parseInt(document.querySelector('#weight').value) 
    const results = document.querySelector('#results')
    const range = document.querySelector('#range')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const answer = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>BMI is: ${answer}</span>`
        if (answer<18.6) {
            range.innerHTML = `<span>You are Under Weight</span>`
        }
        else if(answer>18.9 && answer<24.9){
            range.innerHTML = `<span>You are in Normal Range</span>`
        }
        else if(answer>24.9){
            range.innerHTML = `<span>You are overweight</span>`
        }
    }
})
```

## project 3

```javascript
const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
},1000);

```


## project 4

```javascript
let randomNum = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(event){
        event.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // validates the input value by user
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a valid number')
    }
    else if(guess>100){
        alert('Please enter a valid number')
    }
    else if(prevGuess.includes(guess)){
        alert('You already guessed this number')
    }
    else{
        prevGuess.push(guess)
        if(numGuess>=10){
            cleanGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        }
        else{
            cleanGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // check whether the value is correct, high or low
    if(guess===randomNum){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess<randomNum){
        displayMessage(`Number is TOO Low`)
    }
    else if(guess>randomNum){
        displayMessage(`Number is TOO High`)
    }
}

function cleanGuess(guess){
    // clean values and update
    userInput.value = ''
    guessSlot.textContent += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    // dislays message for high and low number
    lowOrHi.textContent = message
}

function endGame(){
    // disable the input field and create a button to start again
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id= "newGame">Start new Game</button>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    // start and resetting the old values and messages
    const newGamebtn = document.querySelector("#newGame")
    newGamebtn.addEventListener('click', function(e){
        randomNum = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        displayMessage('')
        startOver.removeChild(p);
        playGame = true;
    });
}
```