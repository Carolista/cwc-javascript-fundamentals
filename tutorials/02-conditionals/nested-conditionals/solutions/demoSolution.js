/**** NESTED CONDITIONALS: SOLUTION ****/

/*
    A nested conditional is an if statement placed inside another if statement. 
    It allows us to check for a secondary condition only after a primary condition 
    has been met.

    The Hierarchy: The "outer" condition acts as a gatekeeper. If the outer condition 
    is false, the computer never even looks at the "inner" condition.

    It is perfect for scenarios where one check depends entirely on another. 
    For example: If the ship is docked, then check if the airlock is safe to open.

    Indentation is critical here. Every time you nest, you move the code further to 
    the right so you can visually see which instructions belong to which "layer" of logic.
*/

/** EXAMPLE 1 - THE GATEKEEPER **/

let isShipDocked = true;
let airPressurePercent = 100;

// We only check air pressure if the ship is actually docked.
if (isShipDocked) {
	console.log("Docking confirmed. Checking air pressure...");

	if (airPressurePercent === 100) {
		console.log("Airlock safe to open."); // Airlock safe to open.
	} else {
		console.log("Airlock unsafe: Pressure mismatch.");
	}
} else {
	console.log("Docking not detected. Airlock remains sealed.");
}

/** EXAMPLE 2 - NESTED LOGIC WITH FALLBACKS **/

let fuelLevel = 15;
let isEmergencyOverrideActive = false;

// Logic: If fuel is low, we only panic if there's no emergency override.
if (fuelLevel < 20) {
	if (isEmergencyOverrideActive) {
		console.log("Fuel low, but override is active. Continuing mission.");
	} else {
		console.log("Alert: Low fuel! Immediate refueling required."); // Alert: Low fuel! Immediate refueling required.
	}
} else {
	console.log("Fuel levels nominal.");
}
