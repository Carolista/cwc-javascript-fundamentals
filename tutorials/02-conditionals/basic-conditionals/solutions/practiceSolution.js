/**** BASIC CONDITIONAL STATEMENTS: PRACTICE SOLUTION ****/

/*
    Use if/else statements when there are only two potential
    outcomes.

    Use if / else if / else structures when there are more
    than two potential outcomes.
*/

/** EXERCISE 1: CLIMATE CONTROL **/

let interiorTemp = 85;

/*
    If interiorTemp is greater than 80, log "Activating cooling fans."
    Otherwise, log "Temperature nominal."
*/
if (interiorTemp > 80) {
	console.log("Activating cooling fans."); // Activating cooling fans.
} else {
	console.log("Temperature nominal.");
}

/** EXERCISE 2: OXYGEN ALERT **/

let oxygenLevel = 18;

/* 
    If oxygenLevel is less than 20, log "Oxygen low! Check scrubbers."
    Otherwise, log "Oxygen levels stable."
*/
if (oxygenLevel < 20) {
	console.log("Oxygen low! Check scrubbers."); // Oxygen low! Check scrubbers.
} else {
	console.log("Oxygen levels stable.");
}

/** EXERCISE 3: SHIELD MANAGEMENT **/

let shieldEnergy = 40;

/*
    If shieldEnergy is less than 50, log "Shields critical! Redirecting power."
    Otherwise, log "Shields at acceptable levels."
*/
if (shieldEnergy < 50) {
	console.log("Shields critical! Redirecting power."); // Shields critical! Redirecting power.
} else {
	console.log("Shields at acceptable levels.");
}

/** EXERCISE 4: DOCKING LIGHTS **/

let isDocked = false;

/* 
    If isDocked is true, log "Docking lights: OFF".
    Otherwise, log "Docking lights: ON".
*/
if (isDocked) {
	console.log("Docking lights: OFF");
} else {
	console.log("Docking lights: ON"); // Docking lights: ON
}

/** EXERCISE 5: ALTITUDE CATEGORY **/

let currentAltitude = 5000;

/*
    Categorize the currentAltitude:
        - Over 10000: log "High Orbit"
        - Over 2000: log "Low Orbit"
        - 2000 or less: log "Atmospheric"
*/
if (currentAltitude > 10000) {
	console.log("High Orbit");
} else if (currentAltitude > 2000) {
	console.log("Low Orbit"); // Low Orbit
} else {
	console.log("Atmospheric");
}

/** EXERCISE 6: COMM SIGNAL **/

let communicationStrength = 0.4;

/* 
    Check the communicationStrength (0.0 to 1.0):
        - 0.8 or higher: log "Signal: Strong"
        - 0.5 or higher: log "Signal: Fair"
        - Below 0.5: log "Signal: Poor"
*/
if (communicationStrength >= 0.8) {
	console.log("Signal: Strong");
} else if (communicationStrength >= 0.5) {
	console.log("Signal: Fair");
} else {
	console.log("Signal: Poor"); // Signal: Poor
}

/** EXERCISE 7: LANDING SEQUENCE **/

let landingStep = 2;

/*
    The landingStep variable tracks our progress:
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
