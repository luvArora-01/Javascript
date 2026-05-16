
/********************NUMBER*********************/


// automatically detect that it is a number
const score = 400
console.log(score);


// explicitly value is number
const balance = new Number(100)
console.log(balance);

// number to string conversion
console.log(balance.toString());

// check length
console.log(balance.toString().length);

// to fixed
console.log(balance.toFixed(2));      // give the 2 digit after the decimal

// to precision
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(4));     // give the precise value and round off value

// to locale string
const hundreds = 100000000
console.log(hundreds.toLocaleString());      // the commas in between the digit



/********************MATHS*********************/


console.log(Math);
console.log(Math.abs(-4));               // give absolute value
console.log(Math.round(4.6));           // remove the decimal 
console.log(Math.ceil(4.3));           // give upper value
console.log(Math.floor(4.6));         // give lower value
console.log(Math.sqrt(81));          // give square root value
console.log(Math.min(4,6,7,5));        // give min value value among elements
console.log(Math.max(4,6,7,5));        // give max value value among elements
console.log(Math.random());            // always give random values between 0 and 1
console.log(Math.floor(Math.random()*10000) + 1);          // can generate random otp 

// random values for a range between min and max 
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)