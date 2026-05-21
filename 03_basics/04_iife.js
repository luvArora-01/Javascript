// Immediately Invoked Function Expression (IIFE)

// a JavaScript idiom where a function runs as soon as it is defined
// ensuring variables declared inside do not "pollute" the global namespace.

// syntax::-
// ({function definition})(execution)

(function database(){
    // named IIFE
    console.log(`DB connected`);
})();

// When writing multiple IIFEs together, you should use a semicolon ; after the first one.
// Because JavaScript may treat the second () as a continuation of the first function call.

((name)=>{
    // un-named IIFE
    console.log(`DB not connected, ${name}`);
})('love');