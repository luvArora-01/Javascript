// generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};


let intervalId;
// # start changing color
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
// getting access to the start button
document.querySelector("#start").addEventListener('click',startChangingColor)


// # stop changing color
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};
// getting access to the stop button
document.querySelector("#stop").addEventListener('click',stopChangingColor)