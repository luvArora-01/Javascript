// for of loop (gives the values)

// (a) for array
const arr = [1,2,3,4,5,]
for (const num of arr) {
    console.log(num);
}

// (b) for string
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(greet);
}

// (c) for Maps
/*  # MAP::-
    Collection of key-value pairs where keys can be any data type 
    Unlike standard objects, Map remembers the original insertion order of its elements
    It have unique values
*/
const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}

// (d) for object (for of can't iterate object)
const myObject = {
    'game1':'NSF',
    'game2':'spiderman'
}
// for (const obj of myObject) {        // myObject is not iterable
//     console.log(obj);
// }