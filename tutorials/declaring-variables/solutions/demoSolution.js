/**** DECLARING AND INITIALIZING VARIABLES: DEMO SOLUTION ****/

/*
    One of the most fundamental concepts of programming is the ability
    to store values and use them later. In every programming language,
    we use something called a variable.

    In JavaScript, to declare a variable for the very first time, the
    modern practice is to use the 'let' keyword. This makes it clear to
    JavaScript that we are defining something new.

    Give it a meaningful name using the camelCase convention.

    While you are not required to store a value in a variable the moment
    you declare it, it is common to do so. This process is called initializing,
    because we are giving the variable its first (or initial) value.

    Use the assignment operator = to assign a value, and end the line with a semicolon.

    That's it!
*/

/** EXAMPLE 1 - DECLARING AND INITIALIZING TOGETHER **/

// Create two variables: one to store a grocery item and the other
// to store its price.

// Remember that values with characters, like a word or phrase, require quotes.
let groceryItem = 'red bell pepper';

// Numbers should not have quotes or any other symbols.
let price = 1.25;

// Print each variable to the console to verify their values have been stored
console.log(groceryItem); // red bell pepper
console.log(price); // 1.25

/** EXAMPLE 2 - DECLARING AND INITIALIZING SEPARATELY **/

// Create a variable that will eventually hold the name of a grocery store department
// then print to see its current value before initialization
let department;
console.log(department); // undefined

// Initialize the variable to a specific value and print it again to verify that
// it now stores a specific value. Do NOT use the 'let' keyword again.
department = 'Produce';
console.log(department); // Produce

// That's it! There are many other types of data we can store in variables,
// which you will learn about soon.
