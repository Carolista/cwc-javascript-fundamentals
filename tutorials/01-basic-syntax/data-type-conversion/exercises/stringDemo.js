/**** EXPLICITLY CONVERTING DATA TO STRINGS ****/

/* 
    There are two ways to convert data to a string:
      - String(data) - a function that accepts the data as an argument;
        use when you are uncertain whether a piece of data holds a
        value; it will not crash your program if it is null or undefined,
        so it is safe to use anytime
        
      - data.toString() - a method attached to the string;
        use when you are sure the data has a value (not null or undefined)
*/

// DEMO: Select an appropriate function for converting each piece of data
// into a string. In some cases, either will do. Print each result to the
// console along with its type.

let countdown = 10;
let rocketFuelTempCelsius = 2740.5;
let isSystemReady = true;
let sensorData = null;

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
