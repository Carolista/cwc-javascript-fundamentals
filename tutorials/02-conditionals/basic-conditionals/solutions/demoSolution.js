/**** BASIC CONDITIONAL STATEMENTS: SOLUTION ****/

/*
    With computers, conditional logic is essential in order to have
    multiple possible outcomes. We accomplish this with special
    structures known as if, else-if, and else statements.

    The 'if' statement is used to execute a block of code only if a 
    specified condition is true. 

    The 'else if' statement allows you to check multiple conditions.
    
    The 'else' statement provides an 
    alternative block of code if that condition is false.

    When they are combined, JavaScript will execute the code block 
    for the FIRST true condition it finds and ignore everything else in the chain.
*/

let fuelPercent = 15;
let hatchStatus = "Locked";

/** EXAMPLE 1 - BASIC IF **/ 

// If the condition is true, the message prints. If false, nothing happens.
if (fuelPercent < 20) {
    console.log("Warning: Low fuel levels detected."); // Warning: Low fuel levels detected.
}

/** EXAMPLE 2 - IF/ELSE PATHS **/ 

// We provide two distinct paths for the computer to take.
if (hatchStatus === "Open") {
    console.log("Caution: External hatch is open.");
} else {
    console.log("Hatch is secured. Ready for vacuum."); // Hatch is secured. Ready for vacuum.
}

/** EXAMPLE 3 - UPDATING VARIABLES IN BLOCKS **/

let engineStatus = "Inactive";
let isIgnitionTriggered = true;

if (isIgnitionTriggered) {
    engineStatus = "Active";
} else {
    engineStatus = "Inactive";
}

console.log(engineStatus); // Active

/** EXAMPLE 6 - LOOKING FOR SPECIFIC MATCHES **/

let lightStatus = "Blinking Blue";

if (lightStatus === "Green") {
    console.log("System Go");
} else if (lightStatus === "Red") {
    console.log("System Error");
} else {
    console.log("Unknown status light detected."); // Unknown status light detected.
}

/** EXAMPLE 4 - MULTIPLE PATHS **/ 

let fuelLevel = 45;

if (fuelLevel > 80) {
    console.log("Fuel Status: Full");
} else if (fuelLevel > 20) {
    console.log("Fuel Status: Nominal"); // Fuel Status: Nominal
} else {
    console.log("Fuel Status: Critical");
}

