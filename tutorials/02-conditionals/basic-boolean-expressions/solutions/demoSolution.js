/**** BASIC BOOLEAN EXPRESSIONS: SOLUTION ****/

/*
    Boolean expressions are the foundation of logic in programming. 
    They are essentially questions that JavaScript can answer with a 
    definitive true or false. Using comparison operators, we can 
    check how two values relate to one another.

    Relational Operators: 
    Use < and > for comparing quantities (e.g., is our altitude high enough?).

    Equality Operators: 
    Use === (Strict Equality) to check if two values and their types are 
    identical, and !== to check if they are different. Use == (Loose Equality) 
    only when a value needs to be coerced from one type to another before comparison.

    The Goal: 
    The result of a comparison is a Boolean value. We can store this result 
    in a variable to act as a "status flag" for choices and conditions.
*/

let hatchCode = "1234-Alpha";
let inputCode = "1234-Alpha";
let shuttleVelocityMPH = 20000;
let satelliteVelocityKPH = "15000";
const KILOMETERS_PER_MILE = 1.60934;
let currentSector = "Orion";
let currentOxygen = 15;
let requiredOxygen = 20;

/** EXAMPLE 1 - STRICT EQUALITY **/

// We almost always use === to ensure types match exactly.
let isCodeCorrect = inputCode === hatchCode;
console.log(isCodeCorrect); // true

/** EXAMPLE 2 - LOOSE EQUALITY **/

// Only use == if one value needs to be coerced to a different type
let hasShuttleMatchedSatelliteVelocity =
	shuttleVelocityMPH * KILOMETERS_PER_MILE == satelliteVelocityKPH;
console.log(hasShuttleMatchedSatelliteVelocity); // false

/** EXAMPLE 3 - INEQUALITY **/

// Check if the current sector is NOT our destination.
let isNotAtDestination = currentSector !== "Mars";
console.log(isNotAtDestination); // true

/** EXAMPLE 4 - GREATER THAN & LESS THAN **/

// Checking if we have enough oxygen to survive.
let hasEnoughOxygen = currentOxygen > requiredOxygen;
console.log(hasEnoughOxygen); // false

// Check if the oxygen is so low that it's critical
let isOxygenCritical = currentOxygen <= 10;
console.log(isOxygenCritical); // false
