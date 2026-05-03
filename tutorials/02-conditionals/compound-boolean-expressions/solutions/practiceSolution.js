/**** COMPOUND BOOLEAN EXPRESSIONS: PRACTICE SOLUTION ****/

/*
    Use what you've learned about logical operators (&&, ||, !)
    to complete the practice exercises below.
*/

/** EXERCISE 1: LAUNCH READINESS **/

let fuelLevel = 25;
let isEngineHot = false;

/*
    A ship can launch if the fuelLevel is above 20 AND
    the engine is NOT hot (isEngineHot is false).
    Create a variable 'canLaunch' and log the result.
*/
const canLaunch = fuelLevel > 20 && !isEngineHot;
console.log(canLaunch); // true

/** EXERCISE 2: LIFE SUPPORT CHECK **/

let hasOxygen = true;

/* 
    The crew is safe if they have oxygen OR
    if the distanceToTargetKm is less than 100.
    Create a variable 'isCrewSafe' and log the result.
*/
const isCrewSafe = hasOxygen || distanceToTargetKm < 100;
console.log(isCrewSafe); // true

/** EXERCISE 3: CONTACT STATUS **/

let isCommunicationUp = false;

/*
    We are in a "Silent" state if communication is NOT up.
    Create a variable 'isRadioSilent' by flipping the
    value of 'isCommunicationUp', then log the result.
*/
const isRadioSilent = !isCommunicationUp;
console.log(isRadioSilent); // true

/** EXERCISE 4: WEATHER PERMITTING **/

let weatherStatus = "Clear";
let distanceToTargetKm = 500;

/* 
    A landing is allowed if the weatherStatus is "Clear"
    OR the weatherStatus is "Cloudy".
    Create a variable 'isWeatherPassable' and log the result.
*/
const isWeatherPassable = weatherStatus === "Clear" || weatherStatus === "Cloudy";
console.log(isWeatherPassable); // true
