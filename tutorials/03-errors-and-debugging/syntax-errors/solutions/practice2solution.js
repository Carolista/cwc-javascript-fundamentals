const input = require("readline-sync");

/**** DEBUGGING SYNTAX & RUNTIME ERRORS: PRACTICE 2 SOLUTION ****/

/*
    MISSION: PRE-FLIGHT DIAGNOSTICS
    
    This program contains several errors. Some will prevent the code from 
    even starting (syntax), while others will "crash the ship" only after 
    the program is running (runtime).
    
    Task: Fix the errors so the mission can proceed to launch.
*/

// --- 1. INITIALIZATION ---

console.log("--- INITIALIZING MISSION CONTROL ---");

// Fixed syntax: Missing closing parenthesis.
let pilotName = input.question("Enter Pilot Name: ");

// --- 2. ENGINE STATUS CHECK ---

let engineStatus = "Off";
let checkEngines = input.question("Perform engine diagnostic? (Y/N): ");

if (checkEngines === "Y") {
	// Fixed Runtime Error: 'engineHealth' was not defined before being used.
	let engineHealth = 100;
	console.log(`Engine Health at ${engineHealth}%`);
	engineStatus = "Ready";
} else {
	console.log("Skipping engine diagnostic...");
}

// --- 3. CARGO WEIGHT CALCULATION ---

console.log("\n--- CARGO BAY CHECK ---");

// Fixed Runtime Error: .questionInt() is a method and needs parentheses ()
let crateCount = input.questionInt("How many crates are being loaded? ");
let weightPerCrate = 50;

// Fixed Syntax: Template literals require backticks, not quotes.
let totalWeight = crateCount * weightPerCrate;
console.log(`Total Cargo Weight: ${totalWeight}kg`);

// --- 4. FINAL LAUNCH LOGIC ---

console.log("\n--- FINAL STATUS ---");

/* Fixed Syntax: Added missing opening curly brace { for the if statement 
    and fixed the missing double quote in the string.
*/
if (engineStatus === "Ready" && totalWeight < 1000) {
	console.log("All systems GO. Launching " + pilotName + " into orbit!");
} else {
	console.log("Launch ABORTED. Check engine status or cargo weight.");
}

// Fixed Syntax: Added missing closing brace } for the else block.
