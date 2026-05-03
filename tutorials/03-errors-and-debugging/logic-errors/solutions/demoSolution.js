/**** DEBUGGING LOGIC ERRORS: SOLUTION ****/

/*
    Logic errors are the most challenging bugs to find because your code 
    is perfectly valid JavaScript. There are no red squiggly lines and no 
    runtime crashes. The program runs from start to finish, but it 
    produces the wrong result.

    These usually stem from a misunderstanding of the problem, such as 
    using < when you meant >, or accidentally checking the oxygenLevel 
    variable when you meant to check fuelLevel.

    Since the computer won't help you find these, you have to be the detective. 
    Use console.log() to verify that your variables actually hold the values 
    you think they do at every step.
*/

/** EXAMPLE 1 - THE FLIPPED SIGN **/ 

let shieldPower = 10;
let dangerZoneThreshold = 50;

// LOGIC ERROR: The dev used < instead of >. 
// The code thinks shields are "Safe" only when they are low!
let isShieldSafe = shieldPower < dangerZoneThreshold; 

console.log(`Shield Power: ${shieldPower}`);
console.log(`Is Shield Safe? ${isShieldSafe}`); // true (wrong!)

// FIX: Flip the operator to check if power is ABOVE the threshold.
isShieldSafe = shieldPower >= dangerZoneThreshold; 
console.log(`Fixed Status: ${isShieldSafe}`); // false (correct!)


/** EXAMPLE 2 - THE WRONG VARIABLE **/

let pilotExperience = 10; // years
let requiredExperience = 5;
let hasHelmet = false;

let isPilotCleared; // for spacewalk

// LOGIC ERROR: The dev accidentally checked experience twice instead of checking for a helmet.
if (pilotExperience >= requiredExperience && pilotExperience >= requiredExperience) {
    isPilotCleared = true;
    console.log("Pilot is cleared for spacewalk!"); // This prints... but they have no helmet!
}

// FIX: Check the correct variable.
if (pilotExperience >= requiredExperience && hasHelmet) {
    isPilotCleared = true;
    console.log("Pilot is cleared for spacewalk!");
} else {
    isPilotCleared = false;
    console.log("CRITICAL: Helmet missing. STAY IN THE SHIP."); // CRITICAL: Helmet missing. STAY IN THE SHIP.
}
