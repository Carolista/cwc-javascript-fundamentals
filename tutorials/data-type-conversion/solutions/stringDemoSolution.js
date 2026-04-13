/**** EXPLICITLY CONVERTING DATA TO STRINGS: DEMO SOLUTION ****/

/* 
    There are two ways to convert data to a string:
      - String(data) - a function that accepts the data as an argument;
        use when you are uncertain whether a piece of data holds a
        value; it will not crash your program if it is null or undefined,
        so it is safe to use anytime
        
      - data.toString() - a method attached to the string;
        use when you are sure the data has a value (not null or undefined)
*/

// Select an appropriate function for converting each piece of data
// into a string. In some cases, either will do. Print each result to the
// console along with its type.

let countdown = 10; // will always be a number, as low as 0
let rocketFuelTempCelsius = 2740.5; // may be undefined
let isSystemReady = true; // will always be true or false
let sensorData = null; // placeholder for eventual data

// Either function will work here since it will always hold a valid number
let countdownAsText = String(countdown); // or countdown.toString()
console.log(countdownAsText);
console.log(typeof countdownAsText);

// If rocketFuelTempCelsius can be undefined, it is safest to use String()
let rocketFuelTempCelsiusAsText = String(rocketFuelTempCelsius);
console.log(rocketFuelTempCelsiusAsText);
console.log(typeof rocketFuelTempCelsiusAsText);

// Either will work here because the value will always be true or false
let isSystemReadyAsText = isSystemReady.toString(); // or String(isSystemReady)
console.log(isSystemReadyAsText);
console.log(typeof isSystemReadyAsText);

// If sensorData can be null, it is safest to use String()
let sensorDataAsText = String(sensorData);
console.log(sensorDataAsText);
console.log(typeof sensorDataAsText);
