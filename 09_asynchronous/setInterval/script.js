// setInterval();
// clearInterval();

// # execute after every interval time

// a. simple and direct
setInterval(function(){
    //console.log("Love Arora");
},3000)

// b. through variable
const sayName = function(){
    //console.log("Heisenberg",new Date().toLocaleTimeString());
}
setInterval(sayName,1000)

// c. changing something using setInterval
const changing = function(){
    document.querySelector('#setInterval').innerHTML = "SetInterval STARTS"
    console.log("Heisenberg",new Date().toLocaleTimeString());
}
let change = setInterval(changing,5000)
// clearInterval
document.querySelector('#stopIt').addEventListener('click',function(){
    clearInterval(change)
    console.log("Stopped interval");
})
document.querySelector('#start').addEventListener('click',function(){
    change = setInterval(changing,1000)
})