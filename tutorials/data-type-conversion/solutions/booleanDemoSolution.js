/**** EXPLICITLY CONVERTING DATA TO BOOLEANS: DEMO SOLUTION ****/

/*
    The concept of "truthy" and "falsy" has to do with non-Boolean
    data being converted to Boolean.

    Data that will always convert to false using the Boolean() function:
      - false (already a boolean)
      - 0 (zero)
      - "" (empty string)
      - null (absence of value)
      - undefined (unknown)
      - NaN (not a number)
      
    Any other data will convert to true. Examples:
      - a string of any length other than zero (including "false", "0", etc.)
      - a number of any value other than 0 or -0 (including Infinity)
*/

/** EXAMPLE 1 - FALSY VALUES */

let humanVisitorsToMars = 0;
let screamInSpace = "";
let alienLifeDetected = null;
let darkMatter = undefined;
let imaginaryNumber = NaN;

// Convert each value above to Boolean and log its new value.

let haveHumansVisitedMars = Boolean(humanVisitorsToMars);
console.log(haveHumansVisitedMars); // false

let isScreamInSpaceAudible = Boolean(screamInSpace);
console.log(isScreamInSpaceAudible); // false

let isAlienLifeDetected = Boolean(alienLifeDetected);
console.log(isAlienLifeDetected); // false

let isDarkMatterDefined = Boolean(darkMatter);
console.log(isDarkMatterDefined); // false

let isRealNumber = Boolean(imaginaryNumber);
console.log(isRealNumber); // false

/** EXAMPLE 2 - TRUTHY VALUES */

let humanVisitorsToMoon = 28;
let firstHumanToWalkOnMoon = "Neil Armstrong";
let buzzLightyearDestination = Infinity; // this is a valid number!

// Convert each value above to Boolean and log its new value.

let haveHumansVisitedMoon = Boolean(humanVisitorsToMoon);
console.log(haveHumansVisitedMoon); // true

let hasHumanWalkedOnMoon = Boolean(firstHumanToWalkOnMoon);
console.log(hasHumanWalkedOnMoon); // true

let doesBuzzHaveDestination = Boolean(Infinity);
console.log(doesBuzzHaveDestination); // true
