# Projects related to DOM

## Project link
[Click Here](#)

# Solution code

## project 1

```javascript
console.log('love')
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
console.log('love')
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