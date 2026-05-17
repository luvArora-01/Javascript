/************************ DIFFERENT DATA TYPES *************************/


console.log("2" > 1);             //true
console.log("02" > 1);           //true


/************************ NULL DATA TYPES *************************/


console.log(null > 0);          //false
console.log(null == 0);        //false
console.log(null >= 0);       //true



/************************ UNDEFINED DATA TYPES *************************/


console.log(undefined == 0);     //false
console.log(undefined > 0);     //false
console.log(undefined < 0);    //false



/************************ STRICT CHECK (===) *************************/


console.log("2" == 2);             //true
console.log("2" === 2);           //false
