/**** COMPOUND BOOLEAN EXPRESSIONS: SOLUTION ****/

/*
    Compound boolean expressions allow us to combine multiple conditions
    using logical operators. This is essential for complex decision-making.

    Logical AND (&&): 
    Returns true only if both expressions are true.

    Logical OR (||): 
    Returns true if at least one of the expressions is true.

    Logical NOT (!): 
    Reverses the boolean value of an expression.
*/

/** EXAMPLE 1 - LOGICAL AND (&&) **/

let hasFuel = true;
let enginesActive = false;

// To launch, we need both fuel and active engines.
let canLaunch = hasFuel && enginesActive;
console.log(canLaunch); // false

/** EXAMPLE 2 - LOGICAL OR (||) **/

let isDaytime = true;
let isWeekend = false;

// We can perform maintenance if it is daytime OR if it is the weekend.
let canPerformMaintenance = isDaytime || isWeekend;
console.log(canPerformMaintenance); // true

/** EXAMPLE 3 - LOGICAL NOT (!) **/

let missionStatus = "Ready";
let fuelLevelPercentage = 100;

// We check if the mission is NOT in a "Ready" state.
let isMissionDelayed = !(missionStatus === "Ready" && fuelLevelPercentage === 100);
console.log(isMissionDelayed); // false

/** EXAMPLE 4 - COMBINING OPERATORS **/

let oxygenLevel = 15;

// Is oxygen within a safe range (between 10 and 20)?
let isOxygenSafe = oxygenLevel > 10 && oxygenLevel < 20;
console.log(isOxygenSafe); // true
