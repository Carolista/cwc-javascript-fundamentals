/**** CONSTANTS: PRACTICE SOLUTION ****/

/*
    Practice identifying which values should be constants 
    and applying the correct naming convention.
*/

/** EXERCISE 1: PHYSICAL CONSTANTS **/

/*
    Create a constant for the Speed of Light. 
    Name it 'SPEED_OF_LIGHT' and set it to 299792458.
*/
const SPEED_OF_LIGHT = 299792458;

/** EXERCISE 2: SHIP LIMITS **/

/*
    Create a constant named 'MAX_FUEL_CAPACITY' 
    and set it to 5000.
*/
const MAX_FUEL_CAPACITY = 5000;

/** EXERCISE 3: CHOOSE THE RIGHT KEYWORD **/

/*
    You are tracking a ship's 'altitude' and its 
    'homePlanet'. One changes, one does not. 
    Declare both with the appropriate keywords (let/const) 
    and naming styles.
*/
const HOME_PLANET = "Earth";
let altitude = 12000;

/** EXERCISE 4: THE ERROR TEST **/

const CAPTAIN_NAME = "Miller";

/*
    inputUncomment the line below and run the code. 
    Observe the error in the console, then comment it 
    back out to fix the program.
*/
// CAPTAIN_NAME = "Holden";

console.log("Captain is still: " + CAPTAIN_NAME);
// Great job!
