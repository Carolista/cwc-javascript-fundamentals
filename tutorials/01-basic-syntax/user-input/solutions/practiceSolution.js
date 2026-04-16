// 1. Import the readline-sync library using CommonJS syntax
const input = require("readline-sync");

/**** CAPTURING USER INPUT FROM THE CONSOLE: PRACTICE SOLUTION ****/

/*
    Reminder: I have already included readline-sync in the package.json 
    file in this codebase; you just need to run the `npm install` command 
    at the project root and make sure a package-lock.json is created for your 
    local copy of this repository if it doesn't already exist.
*/

// 2. Ask the user, "What is your destination planet?"
// Store it in a variable and respond with, "Course set for [Planet Name]."
const planetName = input.question("What is your destination planet? ");
console.log(`Course set for ${planetName}.`);

// 3. Ask the user, "How many metric tons of fuel remain?"
// Use the method that allows for decimals.
// Print, "Fuel levels confirmed at [Amount] metric tons."
const fuelRemaining = input.questionFloat("How many metric tons of fuel remain? ");
console.log(`Fuel levels confirmed at ${fuelRemaining} metric tons.`);

// 4. Ask the user, "How many crew members are currently on the ship?"
// Use the method that requires a whole number (integer).
// Print, "Initializing life support for [Count] individuals."
const crewCount = input.questionInt("How many crew members are currently on the ship? ");
console.log(`Initializing life support for ${crewCount} individuals.`);

// 5. Combine all three inputs previously gathered into a single template
// literal message that has several lines and serves as a flight log, then print it.
const flightSummary = `
--- AUTOMATED FLIGHT LOG ---
The expedition to ${planetName} is underway. 
With ${crewCount} crew members aboard and ${fuelRemaining} metric tons of fuel in the reserves, 
the mission status is currently: NOMINAL.
`;
console.log(flightSummary);
