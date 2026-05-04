/**** DEBUGGING SYNTAX & RUNTIME ERRORS: SOLUTION ****/

/*
    Syntax Errors: These are "grammar" mistakes discovered during the compiling stage. JavaScript can't even start running your code because it doesn't understand the structure. You’ll usually see these instantly in your editor (red squiggly lines) or as soon as you try to run the file.

    Runtime Errors: These occur while the code is running. The code is grammatically correct (no syntax errors), but it tries to do something impossible, like using a variable that doesn't exist. It’s like a pilot trying to engage thrusters when the engines haven't been built yet — the computer stops mid-flight.
*/

// Run the code below from the terminal and fix the errors one-by-one,
// using the error messages JavaScript provides to help you locate them.

// NOTE: It doesn't always point to the exact point where the error occurs, so
// you may need to look at the greater context.

/** EXAMPLE 1 - SYNTAX ERROR (Grammar) **/
// JavaScript stops immediately because it doesn't understand this.
// console.log("System Initializing' // Missing closing quote

console.log("System Initializing");

/** EXAMPLE 2 - RUNTIME ERROR (Illegal Operation) **/
// The syntax is perfect, but you can't perform math on a non-existent variable.
let fuelLevel = 50;

// console.log(fuelLevel + tankCapacity);
// Error: tankCapacity is not defined (This is a Runtime Error)

let tankCapacity = 100;
console.log(fuelLevel + tankCapacity); // 150

/** EXAMPLE 3 - RUNTIME ERROR (Type Error) **/
// You cannot call a string method on an undefined or null value.
let systemErrorCode = null;

// console.log(systemErrorCode.toString());
// Error: Cannot read property 'toString' of null

systemErrorCode = 6902;
console.log(systemErrorCode.toString()); // "6902"

// All fixed! Now you are better equipped to fix some of the
// simplest errors that will inevitably pop up in the future.
