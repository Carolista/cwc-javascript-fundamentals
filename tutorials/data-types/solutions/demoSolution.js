/**** DATA TYPES: DEMO SOLUTION ****/

// View the repository README for a link to the video for this demo.

/*
    The most basic and common data types in JavaScript are
    strings, numbers, and booleans. There are also special types
    like null and undefined. In this exercise you will
    assign values to variables using the 'let' keyword.

    There are also complex types like arrays and objects that serve as
    data structures to store multiple pieces of data, which
    will be covered in the future.
*/

// Create a few examples of different data types.

// String
let shuttleName = 'Endeavor';

// Number
let numberOfAstronauts = 5;

// Boolean
let isReadyForLiftoff = false;

// Null
let experimentResult = null;
// The experiment will take place in space!

// Undefined
let darkMatter;
// Very mysterious, no one really knows... especially not JavaScript!

// We can prove these have been correctly stored by logging them to
// the console and checking the output when we run the file in the terminal.
console.log(shuttleName);
console.log(numberOfAstronauts);
console.log(isReadyForLiftoff);
console.log(experimentResult);
console.log(darkMatter);

// Depending on your terminal, you may note that numbers and booleans are a different
// color in the output than strings, and the output of a string is the usual color
// and is not enclosed in quotes. Similarly, null may appear in bold, and undefined
// will likely appear as a medium gray. This is normal.

// However, the only way to verify the actual type of a piece of data is to use the
// 'typeof' keyword, which returns a string with the name of the type.

// Log the type of each variable above to the console.
console.log(typeof shuttleName);
console.log(typeof numberOfAstronauts);
console.log(typeof isReadyForLiftoff);
console.log(typeof experimentResult);
console.log(typeof darkMatter);
