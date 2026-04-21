/**** ORDER OF CODE EXECUTION: SOLUTION ****/

/*
    JavaScript ultimately executes code from top to bottom. 
    (It does "hoist" certain blocks of code, like function 
    definitions, to the top while compiling the code
    before execution, but you don't need to worry about that yet.) 

    For now, just know that it is important that you write your code 
    in a certain order!
*/

/** EXAMPLE 1 - REFERENCE ERRORS **/

// These lines of code will execute in order from top to bottom.
// Currently there is a problem that is going to cause the program
// to quit early. I need to fix it! Let's take a look.
let num1 = 3;
let num2 = 4;
let total = num1 + num2;
console.log(total);

// If you are referencing a variable name, that variable must have already
// been declared somewhere above in order for JavaScript to know about it!

// In this case, JavaScript was unable to calculate the sum of num1
// and num2 because they were declared below that line. Similarly, it was
// unable to log the value of total since total was declared below the
// console.log statement.

/** EXAMPLE 2 - REASSIGNMENT **/

// It is common to initialize a variable with one value and then reassign
// a different value later. Let's use console.log statements to help us
// see the value at different points as the code executes from top to bottom.

let num = 1;

console.log(num); // The value prints as 1

// NOTE: Remember that you use the 'let' keyword only once — when you first
// declare the variable.

num = 2;

console.log(num); // The value prints as 2

num = 10;

console.log(num); // The value prints as 10

// I have demonstrated that the exact same line of code, console.log(num),
// can produce different results depending on where it is placed!
