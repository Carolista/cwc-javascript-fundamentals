/**** TERNARY EXPRESSIONS: PRACTICE SOLUTION ****/

/*
    Practice using the ternary operator ( ? : ) to create 
    concise logic for the ship's computer.
*/

/** EXERCISE 1: AUTOPILOT TOGGLE **/

let isSafeToEngage = true;

/*
    Create a variable 'autopilotStatus'.
    If isSafeToEngage is true, assign "Autopilot: ACTIVE".
    Otherwise, assign "Autopilot: MANUAL".
    Then log the result.
*/
const autopilotStatus = isSafeToEngage ? "Autopilot: ACTIVE" : "Autopilot: MANUAL";
console.log(autopilotStatus); // Autopilot: ACTIVE

/** EXERCISE 2: SHIELD POWER LEVEL **/

let shieldStrength = 45;

/*
    Create a variable 'shieldWarning'.
    If shieldStrength is less than 50, assign "SHIELD WEAK".
    Otherwise, assign "SHIELD STRONG".
    Then log the result.
*/
const shieldWarning = shieldStrength < 50 ? "SHIELD WEAK" : "SHIELD STRONG";
console.log(shieldWarning); // SHIELD WEAK

/** EXERCISE 3: PASSENGER COUNT ALERT **/

let passengerCount = 6;

/*
    Create a variable 'shuttleCapacity'.
    If passengerCount is greater than 4, assign "Over Capacity".
    Otherwise, assign "Acceptable".
    Then log the result.
*/
const shuttleCapacity = passengerCount > 4 ? "Over Capacity" : "Acceptable";
console.log(shuttleCapacity); // Over Capacity

/** EXERCISE 4: GEAR DEPLOYMENT **/

let altitudeKm = 12;

/*
    Create a variable 'landingGear'.
    If altitudeKm is less than 5, assign "DEPLOYED".
    Otherwise, assign "STOWED".
    Then log the result.
*/
const landingGear = altitudeKm < 5 ? "DEPLOYED" : "STOWED";
console.log(landingGear); // STOWED

// Great job!
