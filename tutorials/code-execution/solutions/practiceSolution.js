/**** ORDER OF CODE EXECUTION: PRACTICE SOLUTION ****/

/** EXERCISE 1 **/

// Re-order the lines of code below so that the final output is as follows:
// JAVA
// JAVASCRIPT
let word = '';

word = word + 'JA';
word = word + 'VA';

console.log(word);

word = word + 'SC';
word = word + 'RI';
word = word + 'PT';

console.log(word);

// Run the file before moving on to ensure you got the expected result.

/** EXERCISE 2 **/

// Plan the additional lines of code needed according to the following guidelines:
//    A) You will modify some existing numbers. The final sum in the console should be 445.
//    B) The sum should be calculated by adding all modified numbers and storing
//       it in a new variable. Print only that new variable.
//    C) Use the + and - operators to add and subtract numbers as required
//    D) All odd numbers should be made even by adding 1 to their value and
//       reassigning them to the same variable name without changing the original assignment.
//    E) All even numbers should be made odd by subtracting 5 from their value
//       and reassigning to the same variable without changing the original assignment.

// Add code where needed below, then test by running the file.

// IMPORTANT: Do not edit the existing lines below; add NEW lines of code only.

let num1 = 56;
let num2 = 121;
let num3 = 73;
let num4 = 24;
let num5 = 88;
let num6 = 95;

// You may have put each of these lines of code just after each of the existing lines above.
// That's okay! As long as the reassignments are done after the original variable is declared
// and before the sum is calculated, it will work.
num1 = num1 - 5;
num2 = num2 + 1;
num3 = num3 + 1;
num4 = num4 - 5;
num5 = num5 - 5;
num6 = num6 + 1;

// This line must be after the reassignments but before printing it
let sum = num1 + num2 + num3 + num4 + num5 + num6;

// This must be the very last line after all other code has been executed.
console.log(sum);

// Great job! Understanding how JavaScript executes and evaluates code is
// important. Keep these principles in mind as you solve future problems!
