/**** TERNARY EXPRESSIONS: SOLUTION ****/

/*
    Ternary expressions provide a shorthand way to write simple if/else 
    logic. They are often used to assign a value to a variable based 
    on a condition, but typically they are used only when the logic
    is very concise. 

    The pattern: 
    booleanVariableOrExpression ? valueIfTrue : valueIfFalse
*/

/** EXAMPLE 1 - USING A BOOLEAN VARIABLE **/

let isDockingComplete = true;

// You COULD use a regular if/else statement to assign a status string
// to a new variable.
let gateStatus;

if (isDockingComplete) {
	gateStatus = "Open";
} else {
	gateStatus = "Closed";
}
console.log(gateStatus);

// But it can also be done very cleanly using a one-line
// ternary expression.
let airlockGateStatus = isDockingComplete ? "Open" : "Closed";
console.log(airlockGateStatus); // Open

/** EXAMPLE 2 - USING A BOOLEAN EXPRESSION **/

let lightYears = 5;

// If distance is over 10, assign "Warp", otherwise "Impulse"
let driveMode = lightYears > 10 ? "Warp Drive" : "Impulse Engines";
console.log(driveMode); // Impulse Engines
