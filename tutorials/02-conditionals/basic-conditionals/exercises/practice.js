/**** BASIC CONDITIONAL STATEMENTS: PRACTICE ****/

/*
    Use if/else statements when there are only two potential
    outcomes.

    Use if / else if / else structures when there are more
    than two potential outcomes.
*/

/** EXERCISE 1: CLIMATE CONTROL **/

let interiorTemp = 85;

/*
    TODO: If interiorTemp is greater than 80, log "Activating cooling fans."
    Otherwise, log "Temperature nominal."
*/

/** EXERCISE 2: OXYGEN ALERT **/

let oxygenLevel = 18;

/* 
    TODO: If oxygenLevel is less than 20, log "Oxygen low! Check scrubbers."
    Otherwise, log "Oxygen levels stable."
*/

/** EXERCISE 3: SHIELD MANAGEMENT **/

let shieldEnergy = 40;

/*
    TODO: If shieldEnergy is less than 50, log "Shields critical! Redirecting power."
    Otherwise, log "Shields at acceptable levels."
*/

/** EXERCISE 4: DOCKING LIGHTS **/

let isDocked = false;

/* 
    TODO: If isDocked is true, log "Docking lights: OFF".
    Otherwise, log "Docking lights: ON".
*/

/** EXERCISE 5: ALTITUDE CATEGORY **/

let currentAltitude = 5000;

/*
    TODO: Categorize the currentAltitude:
        - Over 10000: log "High Orbit"
        - Over 2000: log "Low Orbit"
        - 2000 or less: log "Atmospheric"
*/

/** EXERCISE 6: COMM SIGNAL **/

let communicationStrength = 0.4;

/* 
    TODO: Check the communicationStrength (0.0 to 1.0):
        - 0.8 or higher: log "Signal: Strong"
        - 0.5 or higher: log "Signal: Fair"
        - Below 0.5: log "Signal: Poor"
*/

/** EXERCISE 7: LANDING SEQUENCE **/

let landingStep = 2;

/*
    TODO: The landingStep variable tracks our progress:
        - If 1: log "Deploying heat shield"
        - If 2: log "Deploying parachutes"
        - If 3: log "Activating thrusters"
        - Otherwise: log "Waiting for sequence start"
*/
if (landingStep === 1) {
	console.log("Deploying heat shield");
} else if (landingStep === 2) {
	console.log("Deploying parachutes"); // Deploying parachutes
} else if (landingStep === 3) {
	console.log("Activating thrusters");
} else {
	console.log("Waiting for sequence start");
}
