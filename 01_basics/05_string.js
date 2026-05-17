const name = "Love"
const repoCount = 30


// Simple String Concatenation
console.log(name + repoCount);

//Backtick string interpolation
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);


//String Methods
const gameName = new String('love arora')
// 1. Index Access
console.log(gameName[3]);
// 2. Upper Case
console.log(gameName.toUpperCase());
// 3. Lower Case
console.log(gameName.toLowerCase());
// 4. Character at that index
console.log(gameName.charAt(3));              //give value at that index
// 5. Index of that character
console.log(gameName.indexOf('o'));          //give index at which the value is

// 6. Substring
const newString = gameName.substring(2,6)        //last value do not include in string, don't obeys -ve value
console.log(newString);

// 7. Slice
const anotherString = gameName.slice(0,6)       //can add negative value too
console.log(anotherString);

// 8. Trim
const newStringOne = "     love arora      "
console.log(newStringOne);
console.log(newStringOne.trim());                  //exclude the whitespaces from both sides
console.log(newStringOne.trimStart());            //exclude the whitespaces from the start 
console.log(newStringOne.trimEnd());             //exclude the whitespaces from the end

// 9. Replace
const url = "https://love.com/love%20arora"
console.log(url.replace('%20','-'));
// 10. Includes
console.log(url.includes('love'));
// 11. Split
const gameNameOne = new String('new-york-europe-america')
console.log(gameNameOne.split('-'));