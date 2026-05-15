const name = "Love"
const repoCount = 30


// Simple String Concatenation
console.log(name + repoCount);

//Backtick string interpolation
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);


//String Methods
const gameName = new String('love')
console.log(gameName[3]);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-2,6)
console.log(anotherString);



