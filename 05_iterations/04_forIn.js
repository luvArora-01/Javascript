// for in loop (gives the key/index)

// (a) for object
const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    sw:'swift'
}
for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}

// (b) for array
const programming = ['js','rb','py','java','cpp']
for (const key in programming) {
    console.log(`${key} => ${programming[key]}`);
}

// (c) for map  (for...in is used for object properties, and Map stores data differently.)
const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
for (const key in map) {
    console.log(key);           // prints nothing
}