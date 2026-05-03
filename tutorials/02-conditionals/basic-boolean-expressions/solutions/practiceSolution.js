/**** BASIC BOOLEAN EXPRESSIONS: PRACTICE SOLUTION ****/

/*
    Use what you've learned about boolean expressions to complete the
    practice exercises below.
*/

/** EXERCISE 1: SPEED CHECK **/

let shipSpeed = 15000;
let escapeVelocity = 28000;

/*
    Create a boolean variable named 'isAtEscapeVelocity'.
    Check if 'shipSpeed' is greater than or equal to 'escapeVelocity',
    then log the new variable.
*/
const isAtEscapeVelocity = shipSpeed >= escapeVelocity;
console.log(isAtEscapeVelocity); // false

/** EXERCISE 2: CREW COUNT **/

let crewPresent = "5";
let crewRequired = 5;

/* 
    Create a boolean variable named 'isCrewReady'.
    Check if 'crewPresent' is strictly equal to 'crewRequired',
    then log the new variable.
*/
const isCrewReady = crewPresent === crewRequired;
console.log(isCrewReady); // false

// Fix it!

const isCrewReadyTake2 = crewPresent == crewRequired;
console.log(isCrewReadyTake2); // true

/** EXERCISE 3: STATUS CHECK **/

let missionStatus = "Pre-Launch";

/*
    Create a boolean variable named 'isNotAborted'.
    Check if 'missionStatus' is NOT equal to the string "Aborted",
    then log the new variable.
*/
const isNotAborted = missionStatus !== "Aborted";
console.log(isNotAborted); // true

/** EXERCISE 4: EXPERIENCE CHECK **/

let pilotRank = "Rookie";

/* 
    Create a boolean variable named 'isCaptain'.
    Check if 'pilotRank' is exactly equal to "Captain",
    then log the new variable.
*/
const isCaptain = pilotRank === "Captain";
console.log(isCaptain); // false

// Great job!
