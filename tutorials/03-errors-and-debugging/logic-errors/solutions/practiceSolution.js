/**** DEBUGGING LOGIC ERRORS: PRACTICE SOLUTION ****/

/*
    The following mission scripts run without crashing, but they 
    all contain logic errors that will jeopardize the crew.
    Fix the logic inside the conditionals.
*/

/** EXERCISE 1: THE INVERTED AIRLOCK **/

/*
    Requirement: The airlock should only open if 'isInternalPressureStable' 
    is true AND 'isExternalVacuum' is false.
*/
let isInternalPressureStable = true;
let isExternalVacuum = true;

// ERROR: Currently using OR (||). This would open the door in a vacuum!
if (isInternalPressureStable && !isExternalVacuum) {
	console.log("Airlock opening...");
} else {
	console.log("Airlock remains sealed for safety."); // Airlock remains sealed for safety.
}

/** EXERCISE 2: THE SPEEDING SHUTTLE **/

/*
    Requirement: If speed is over 25000, status is "Fast".
    If speed is between 10000 and 25000, status is "Cruising".
    Otherwise, status is "Slow".
*/
let shuttleSpeed = 30000;

// ERROR: The conditions are in the wrong order, or using the wrong signs.
if (shuttleSpeed > 25000) {
	console.log("Status: Fast"); // Status: Fast
} else if (shuttleSpeed > 10000) {
	console.log("Status: Cruising");
} else {
	console.log("Status: Slow");
}

/** EXERCISE 3: THE AUTO-LANDER TERNARY **/

/*
    Requirement: If altitude is exactly 0, 'landingStatus' should be "Landed".
    Otherwise, it should be "In Flight".
*/
let currentAltitude = 50;

// ERROR: The ternary results are swapped.
const landingStatus = currentAltitude === 0 ? "Landed" : "In Flight";

console.log(`Current Altitude: ${currentAltitude}. Mission State: ${landingStatus}`);
// Current Altitude: 50. Mission State: In Flight

/** EXERCISE 4: THE OVER-TRUSTING COMPUTER **/

/*
    Requirement: To engage "Hyperdrive", we need (fuel > 90) AND (engines === "Warm").
*/
let fuel = 95;
let engineTemp = "Cold";

// ERROR: The code is only checking fuel.
if (fuel > 90 && engineTemp === "Warm") {
	console.log("Engaging Hyperdrive!");
} else {
	console.log("Hyperdrive failed: Check engine temperature."); // Hyperdrive failed: Check engine temperature.
}
