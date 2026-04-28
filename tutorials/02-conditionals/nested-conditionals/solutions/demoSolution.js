/**** NESTED CONDITIONALS: SOLUTION ****/

/*
    Nested conditionals allow us to check for secondary conditions 
    only after a primary condition has been met.
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
