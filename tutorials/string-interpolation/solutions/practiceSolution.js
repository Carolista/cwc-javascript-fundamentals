/**** STRING INTERPOLATION WITH TEMPLATE LITERALS: PRACTICE SOLUTION ****/

// 1. Print a single string using a template literal that combines the following three
// variables and produces the following: "Captain Buzz has served in space for 12 years."
let firstName = "Buzz";
let rank = "Captain";
let yearsInSpace = 12;

console.log(`${rank} ${firstName} has served in space for ${yearsInSpace} years.`);

// 2. Print a single string using a template literal that uses a single placehold to
// produce the following: "Total crew members aboard: 7"
let humanCrew = 5;
let droidCrew = 2;

console.log(`Total crew members aboard: ${humanCrew + droidCrew}`);

// 3. Print multiple lies at once using a template literal as shown below.
// Make sure there is a blank line both above and below the text.

//
// DESTINATION: Mars
// ESTIMATED TIME: 7 months
// ------------------------
// ENGAGE THRUSTERS
//

let planet = "Mars";
let travelTime = "7 months";

console.log(`
DESTINATION: ${planet}
ESTIMATED TIME: ${travelTime}
------------------------
ENGAGE THRUSTERS
`);
