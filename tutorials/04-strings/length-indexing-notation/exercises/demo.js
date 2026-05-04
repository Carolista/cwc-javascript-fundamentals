/**** STRING LENGTH, INDEXING, AND BRACKET NOTATION ****/

let shipName = "Galactic Nova";

/** EXAMPLE 1 - THE LENGTH PROPERTY **/ 

// DEMO: Store the length of the ship's name in a variable,
// then log it to the console.
let nameLength = shipName.length;
console.log(nameLength);

/** EXAMPLE 2 - BRACKET NOTATION **/ 

// DEMO: Store the first character of the ship's name in a variable,
// then log it to the console.
let firstLetter = shipName[0];
console.log(firstLetter);

// DEMO: Store the tenth character of the ship's name in a variable,
// then log it to the console.
let tenthLetter = shipName[9];
console.log(tenthLetter);

/** EXAMPLE 3 - FINDING THE LAST CHARACTER **/

// DEMO: Store the last character of the ship's name in a variable,
// then log it to the console.
let lastLetter = shipName[shipName.length - 1];
console.log(lastLetter);

/** EXAMPLE 4 - OUT OF BOUNDS **/

// DEMO: Store the (nonexistent) 99th character of the ship's name 
// in a variable, then log it to the console. What do you see?
let mysteryLetter = shipName[99];
console.log(mysteryLetter);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
