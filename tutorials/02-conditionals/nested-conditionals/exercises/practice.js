/**** NESTED CONDITIONALS: PRACTICE SOLUTION ****/

/*
    Complete the nested logic to handle multi-stage 
    space station operations.
*/

/** EXERCISE 1: LOGIN SECURITY **/

let hasSecurityClearance = true;
let inputPassword = "MarsBound-2026";
let correctPassword = "MarsBound-2026";

/*
    TODO: First, check if hasSecurityClearance is true.
    If it is, check if inputPassword matches correctPassword.
        - If both are true: log "Access granted to Command Console."
        - If password fails: log "Invalid password."
    If hasSecurityClearance is false: log "Clearance required."
*/

/** EXERCISE 2: THROTTLE SAFETY **/

let isEngineOn = true;
let throttleSetting = 80;

/*
    TODO: First, check if isEngineOn is true.
    If it is, check the throttleSetting:
        - If throttleSetting is above 75: log "Warning: High-thrust maneuver!"
        - Otherwise: log "Thrust level stable."
    If isEngineOn is false: log "Engine is offline."
*/

/** EXERCISE 3: CARGO BAY DOORS **/

let isDoorObstructed = false;
let doorCommand = "OPEN";

/*
    TODO: If doorCommand is "OPEN":
        - Check if isDoorObstructed is false.
            - If false: log "Opening cargo bay doors."
            - If true: log "Operation aborted: Obstruction detected."
    Otherwise: log "Doors remain closed."
*/

// Great job!
