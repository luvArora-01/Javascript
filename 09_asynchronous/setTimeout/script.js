// setTimeout();
// clearTimeout();

// # execute after the declared time

// a. simple and direct
setTimeout(function(){
    // console.log("Love Arora");
},2000)

// b. through variable
const sayMyName = function(){
    //console.log("Love Arora");
}
setTimeout(sayMyName,2000)

// c. changing something using setTimeout
const changeText = function(){
    document.querySelector('#setTimeout').innerHTML = "TIMEOUT COMPLETED"
    console.log("Walter White",new Date().toLocaleTimeString());
}
const changeMe = setTimeout(changeText,5000)
// clearTimeout()
document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("Stopped timeout");
})