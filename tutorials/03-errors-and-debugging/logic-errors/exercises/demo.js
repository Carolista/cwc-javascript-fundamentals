/**** DEBUGGING LOGIC ERRORS ****/

/** EXAMPLE 1 - THE FLIPPED SIGN **/ 

let shieldPower = 10;
let dangerZoneThreshold = 50;

// DEMO: Run the code to see the result, then fix the code and re-run to verify.
let isShieldSafe = shieldPower < dangerZoneThreshold; 

console.log(`Shield Power: ${shieldPower}`);
console.log(`Is Shield Safe? ${isShieldSafe}`);

/** EXAMPLE 2 - THE WRONG VARIABLE **/

let pilotExperience = 10; // years
let requiredExperience = 5;
let hasHelmet = false;

let isPilotCleared = false; // for spacewalk

// DEMO: Run the code to see the result, then fix the code and re-run to verify.
if (pilotExperience >= requiredExperience && pilotExperience >= requiredExperience) {
    isPilotCleared = true;
}

console.log(isPilotCleared);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
