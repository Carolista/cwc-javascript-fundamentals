/**** DEBUGGING SYNTAX ERRORS: DEMO SOLUTION ****/

/*
    Syntax errors happen to everyone, even the most experienced of developers.
    Getting familiar with how to spot them will help you debug quickly and move on. 
    Here's some examples of the most common ones!
*/

// Run the code below from the terminal and fix the errors one-by-one, 
// using the error messages JavaScript provides to help you locate them. 

// NOTE: It doesn't always point to the exact point where the error occurs, so 
// you may need to look at the greater context.

console.log('JavaScript'); // mismatched quotes

let myName = 'Carrie'; // boolean equality check instead of value assignment operator

console.log(myName);

if (2 + 2 === 4) { // value assignment operator instead of equality check
	console.log("It's true!");
} else { // missing opening bracket
	console.log("It's false!");
}

console.log(Boolean("Strings with lengths greater than 0 are 'truthy!'")); 
// missing double quote AND missing parenthesis

// All fixed? Great job! Now you are better equipped to fix some of the 
// simplest errors that will inevitably pop up in the future.
