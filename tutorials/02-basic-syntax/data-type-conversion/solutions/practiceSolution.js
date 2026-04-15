/**** DATA TYPE CONVERSION: PRACTICE SOLUTION ****/

/*
    Get some practice with both explicit and implicit conversion.
*/

/** EXPLICIT CONVERSION **/

// STRINGS

// 1. Convert these values to numbers using String() and .toString() (try one of each)
// Store the converted values in new variables; print each variable and its type.
let engineTemp = 240;
let isShieldActive = true;

let tempDisplay = String(engineTemp);
console.log(tempDisplay, typeof tempDisplay); // "240"

let shieldStatus = isShieldActive.toString();
console.log(shieldStatus, typeof shieldStatus); // "true"

// NUMBERS

// 2. Convert these values to numbers using the appropriate conversion function/method.
// Store the converted values in new variables; print each variable and its type.
let inputSpeed = '28000';
let inputThrust = '9.81ms';
let inputRotation = '15.5 degrees';

// Number() - Strict conversion
let currentSpeed = Number(inputSpeed);
console.log(currentSpeed, typeof currentSpeed); // 28000

// parseInt() - Grabs the integer at the start
let thrustValue = parseInt(inputThrust);
console.log(thrustValue, typeof thrustValue); // 9

// parseFloat() - Grabs the decimal at the start
let rotationValue = parseFloat(inputRotation);
console.log(rotationValue, typeof rotationValue); // 15.5

// BOOLEANS

// 3. Convert these values to booleans and store the values in new variables,
// grouping them by "truthy" and "falsy". Print each variable and its type.
let shipName = 'Columbia'; // truthy
let cargoWeight = 0; // falsy
let missionStatus = ''; // falsy
let crewCount = 5; // truthy
let repairPlan = null; // falsy

// Truthy values
let isShipReady = Boolean(shipName);
let hasCrewBoarded = Boolean(crewCount);
console.log(isShipReady, typeof isShipReady); // true
console.log(hasCrewBoarded, typeof hasCrewBoarded); // true

// Falsy values
let isCargoReady = Boolean(cargoWeight);
let hasMissionStatus = Boolean(missionStatus);
let hasRepairPlan = Boolean(repairPlan);
console.log(isCargoReady, typeof isCargoReady); // false
console.log(hasMissionStatus, typeof hasMissionStatus); // false
console.log(hasRepairPlan, typeof hasRepairPlan); // false

/** IMPLICIT CONVERSION (TYPE COERCION) **/

let numberOfAstronauts = 5;
let mealsPerAstronaut = 12;
let beveragesPerAstronaut = 24;
let shuttleName = 'Discovery';

// 4. Use what you know about implicit conversion to print the following sentences.
// Use the variables above, and write only one line of code per sentence.

// Print "A total of 60 meals have been loaded onto the shuttle Discovery."
console.log(
	'A total of ' +
		numberOfAstronauts * mealsPerAstronaut +
		' meals have been loaded onto the shuttle ' +
		shuttleName +
		'.'
);

// Print "A total of 36 meals and beverages will be needed for each astronaut."
console.log(
	'A total of ' +
		(mealsPerAstronaut + beveragesPerAstronaut) +
		' meals and beverages will be needed for each astronaut.'
);
