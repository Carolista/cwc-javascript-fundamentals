// Import the readline-sync library
// NOTE: Always import a library at the very top of the file
const input = require('readline-sync');
// You can call it anything you want; I chose 'input'

/**** CAPTURING USER INPUT FROM THE CONSOLE: DEMO SOLUTION ****/

/*
    The readline-sync library is available from npm and gives us an
    out-of-the-box solution for interacting with a user in the console.

    I have already included readline-sync in the package.json file 
    in this codebase; you just need to run the `npm install` command at 
    the project root and make sure a package-lock.json is created for your 
    local copy of this repository if it doesn't already exist.

    For the purposes of development, you are the user! You will test your
    code in the console to make sure it is interactive and works as intended.

    You must import the library at the top, then you can use a number of
    different methods to capture input, and some of them provide built-in 
    validation for the data type!
      - .question() will automatically capture their response as a string
      - .questionInt() ensures they must enter an integer, 
        or it will ask them to try again
      - .questionFloat() ensures they must enter a decimal number, 
        or it will ask them to try again

    Remember that in order to capture the data, you must store the returned
    value in a variable. Then you can use it whenever you need it.

    There are many other helpful methods you can try out later if you want.
    Documentation: https://www.npmjs.com/package/readline-sync
*/

// Let's create a short interactive form for astronauts to check in with NASA.

// Create a hard-coded header.
console.log('--- WELCOME TO MISSION CONTROL ---');

// Ask for the pilot name, then greet them.
// Remember, .question() always returns a string.
const pilotName = input.question('Enter Pilot Name: ');
console.log(`Welcome aboard, Commander ${pilotName}!`);

// Ask for the number of orbits (validate as a whole number).
// .questionInt() forces the user to enter a whole number.
// If they type "ABC", the library will ask them again automatically!
const orbitCount = input.questionInt('How many orbits have you completed? ');

// Ask for the current velocity (validate as a decimal number or 'float').
// .questionFloat() allows for decimals (crucial for precise space math).
const shipVelocityMach = input.questionFloat('Enter current velocity (in Mach): ');

// Print a final, multi-line summary using the data captured.
console.log(`
    --- STATUS UPDATE SUMMARY ---
    PILOT: ${pilotName}
    ORBITS COMPLETED: ${orbitCount}
    CURRENT SPEED: Mach ${shipVelocityMach}
    STATUS: Ready for deep space maneuvers.
    `);

// NOTE: At this point, since readline-sync is no longer being used and there is
// nothing left to print, the terminal will give you your prompt back.
