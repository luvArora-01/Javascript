/*
A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC (equivalent to the UNIX epoch). This timestamp is timezone-agnostic and uniquely defines an instant in history. 
*/

let myDate = new Date()
console.log(myDate);
// 2026-05-16T11:20:41.307Z

console.log(myDate.toString());
// Sat May 16 2026 16:48:46 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());
// Sat May 16 2026

console.log(myDate.toLocaleString());
// 16/5/2026, 4:48:46 pm

console.log(myDate.toLocaleDateString());
// 16/5/2026

console.log(myDate.toISOString());
// 2026-05-16T11:18:46.295Z

console.log(myDate.toJSON());
// 2026-05-16T11:18:46.295Z

console.log(myDate.toTimeString());
// 16:48:46 GMT+0530 (India Standard Time)


console.log(typeof myDate);        //object

// can create own date (months start from 0)(format:: YYYY,MM,DD, HH,MM,SS  24hrs)
let myCreatedDate = new Date(2023,0,23,15,3,34)
console.log(myCreatedDate.toLocaleString());             //  23/1/2023, 3:03:34 pm

let myCreatedDateOne = new Date("10-05-2004")
console.log(myCreatedDateOne.toLocaleString());        //  5/10/2004, 12:00:00 am





/********************TIME STAMPS*********************/

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth()+1);          // gives month
console.log(newDate.getDay());             //gives day


// gives the object having values of weekday, hour, minute etc..
// can customize the format of time, day, timezone etc..
let update = newDate.toLocaleString('default', {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    day: "numeric"
})
console.log(update);