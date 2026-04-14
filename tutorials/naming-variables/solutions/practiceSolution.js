/**** NAMING VARIABLES: PRACTICE SOLUTION ****/

/*    
    Remember, indicate the data type without putting it in the name:
      - Strings should be nouns (with adjectives as needed)
      - Numbers should describe not only what it represents but include units
      - Booleans should ask a question, beginning with a verb
*/

/** STRINGS **/

// 1. Improve the variable names below.

// 🚩 BAD: Vague or generic labels
let s1 = 'Discovery';
let s2 = 'LC-39A';
let status = 'CRITICAL';
let msg = 'Oxygen levels dropping.';

// ✅ BETTER: Descriptive identity
let shuttleName = 'Discovery';
let launchPadId = 'LC-39A';
let alertLevel = 'CRITICAL';
let lifeSupportWarning = 'Oxygen levels dropping.';

/** NUMBERS **/

// 2. Improve the variable names below.

// 🚩 BAD: Ambiguous units
let speed = 25000;
let time = 12;
let fuel = 0.15;

// ✅ BETTER: Specific and measurable
let velocityKph = 25000;
let countdownSeconds = 12;
let fuelLevelPercentage = 0.15; // or fuelPercentage

/** BOOLEANS **/

// 3. Improve the variable names below.

// 🚩 BAD: Nouns that don't imply "True/False"
let landing = false;
let engine = true;
let contact = true;
let fuelWarning = false;

// ✅ BETTER: State-based prefixes
let isLandingGearDeployed = false;
let areEnginesActive = true;
let hasRadioContact = true;
let shouldShowFuelWarning = false;

// That's all there is to it! We will cover how to name things like arrays
// and functions after you've learned about them in the future.
