/**** STRING INTERPOLATION WITH TEMPLATE LITERALS: DEMO SOLUTION ****/

/*
    Template literals are often preferred intead of concatenation when
    combining text and variables or expressions. They are vastly more readable
    as part of your code and prevent mistakes.

    Instead of using single or double quotes to enclose your strings, you use
    `` backticks. This character can be found on your keyboard at the top left, just above
    the tab key. 

    Write your text like you normally would when not coding. Whenever you need 
    to place a variable, use a placeholder by combining a dollar sign with curly braces:
    ${variableName}
*/

/** EXAMPLE ONE - Single line with variables **/

let captain = "Malcolm Reynolds";
let ship = "Serenity";
let fuelLevel = 85;
let fuelNeeded = 75;

// Here's what we want to produce in the console using variables where the blanks are.
// Captain __________ has a ship called ___________.

// Use concatenation to print the sentence the way you already know.

// 🚩 THE OLD WAY (Concatenation)
// Clunky, easy to forget a space, and uses many quotes.
let oldMessage = "Captain " + captain + " has a ship called " + ship + ".";
console.log(oldMessage);

// Use a template literal to print the sentence instead.

// ✅ THE MODERN WAY (Template Literals)
// Surround with backticks `` and use ${} as a placeholder.
let newMessage = `Captain ${captain} has a ship called ${ship}.`;
console.log(newMessage);

/** EXAMPLE 2 - Evaluating expressions within placeholders **/

// Create a template literal stating the amount of fuel that will be 
// left after the next trip, with your calculation inside a single placeholder.
// Print the result to the console.
let fuelUpdate = `After the next trip to Whitefall, the fuel level will be ${fuelLevel - fuelNeeded}%.`;
console.log(fuelUpdate);

/** EXAMPLE 3 - Multi-line formatting **/

// Template literals respect your Enter key! No need for multiple log statements.

// Using a single template literal, create a multi-line mission brief 
// that lists the values from the variables above, then print it to the console.
let missionBrief = `
--- MISSION BRIEF ---
Captain: ${captain}
Ship:  ${ship}
Fuel:  ${fuelLevel}%
Status: Ready for takeoff
`;
// Notice how the coded lines between the backticks aren't indented — 
// only indent if you want the printed result to also be indented!

console.log(missionBrief);
