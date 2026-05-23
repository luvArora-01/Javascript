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