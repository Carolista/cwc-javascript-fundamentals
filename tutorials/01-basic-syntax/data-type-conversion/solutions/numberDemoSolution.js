/**** EXPLICITLY CONVERTING DATA TO NUMBERS: SOLUTION ****/

/*
    There are three explicit ways to convert data to the Number type:
      - Number() is best used when a pure number is stored as a string
        or a boolean needs to have the value 0 or 1 instead of false or true
      - parseInt() can be used to extract an integer from the front of a string
      - parseFloat() can be used to extract a floating point number (decimal number)
        from the front of a string
    
    JavaScript can also implicity coerce data to be a number under certain circumstances;
    that will be covered in a separate demo on type coercion. 
*/

/** EXAMPLE 1 - Numbers stored as strings **/
let crewCount = "7"; // integer
let oxygenStatus = "0.85"; // float

// Use Number() to convert crewCount and oxygenStatus to numbers,
// then print the new values and their types to the console.
let numberOfAstronauts = Number(crewCount);
let oxygenSaturation = Number(oxygenStatus);
console.log(numberOfAstronauts); // 7
console.log(typeof numberOfAstronauts); // number
console.log(oxygenSaturation); // 0.85
console.log(typeof oxygenSaturation); // number

/** EXAMPLE 2 - Strings starting with numbers but having additional characters **/
let missionLength = "17 days"; // integer
let velocity = "45000.75 km/h"; // float

// Use parseInt() to extract the integer from missionLength,
// then print the new value and its type to the console.
let totalMissionDays = parseInt(missionLength);
console.log(totalMissionDays); // 17
console.log(typeof totalMissionDays); // number

// Use parseFloat() to extract the number from velocity
// and retain the precision of its decimal value, then print
// both the new value and its type to the console.
let velocityKPH = parseFloat(velocity);
console.log(velocityKPH); // 45000.75
console.log(typeof velocityKPH); // number

/** EXAMPLE 3 - A string with no numeric value **/
let pilotName = "Sally Ride";

// Use Number() to convert the string pilotName, then
// print the new value and its type to the console. What happens?
let sallyAsANumber = Number(pilotName);
console.log(sallyAsANumber); // NaN
console.log(typeof sallyAsANumber); // number

// NOTE: Both NaN (not a number) and Infinity are special values in the number type

/** EXAMPLE 4 - An empty string **/
let alertMessageCode = "";

// Use Number() to convert the empty string alertMessage, then
// print the new value and its type to the console. What happens?
let alertCodeNumber = Number(alertMessageCode);
console.log(alertCodeNumber); // 0
console.log(typeof alertCodeNumber); // number

// NOTE: This could cause problems for your code if not handled carefully!

/** EXAMPLE 5 - A boolean value (true or false) **/
let isSystemOnline = true;

// Use Number() to convert isSystemOnline, then print both it
// and its type to the console. What happens?
let systemStatus = Number(isSystemOnline);
console.log(systemStatus); // 1
console.log(typeof systemStatus); // number
