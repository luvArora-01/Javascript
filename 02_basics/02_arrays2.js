const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros= ["superman", "flash", "batman"]


// 1. Push              Add the array as the element in the existing array
marvel_heros.push(dc_heros)
console.log(marvel_heros);


// 2. Concat            Add the elements in the array without modifying the existing array
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// 3. Spread operator            concatenate the array in any order [ (...) => spread operator ]
const allNew = [...marvel_heros, ...dc_heros]
console.log(allNew);

// 4. Flat                       gives a new array while combiming all the elements and remove the sub-arrays
const anotherArr = [ 1,2,3, [4,5,6] ,7, [6,7,[4,5]] ]
let realArr = anotherArr.flat(Infinity)
console.log(realArr);

// 5. isArray                   isArray used to ask where it is array or not
console.log(Array.isArray("love"));

// 6. from                      // from is used to convert into array
console.log(Array.from("love"));
                                // if key value pair is pass then it gives an empty array
console.log(Array.from({name: "love"}));

// 7. of                       // Returns a new array from a set of elements.
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
