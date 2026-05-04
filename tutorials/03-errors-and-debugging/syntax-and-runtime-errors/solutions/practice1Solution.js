/**** DEBUGGING SYNTAX & RUNTIME ERRORS: PRACTICE 1 SOLUTION ****/

/*
    Fix the errors. Some will be caught by your editor (Syntax), 
    and some will only show up when you run the code (Runtime).
*/

/** EXERCISE 1: THE SYNTAX TRAP **/

/*
    Requirement: Log the fuel status.
    Fix: There are two syntax errors in the code below.
*/
let fuel = 90;
console.log("Fuel level is " + fuel + "%"); // Fixed: Missing + and quote issues

/** EXERCISE 2: THE RUNTIME CRASH **/

/*
    Requirement: Log the navigation coordinate.
    Fix: The code tries to log a variable that hasn't been declared yet.
*/
let navCoordinate = "Sector-7G";
console.log(navCoordinate); // Fixed: Moved the log after variable declaration

/** EXERCISE 3: THE TYPO BLUNDER **/

/*
    Requirement: Convert the oxygen level to a string.
    Fix: .toString() is a method, but the code below tries to treat it like a property.
*/
let oxygen = 100;
console.log(oxygen.toString()); // Fixed: Added parentheses to the method call
