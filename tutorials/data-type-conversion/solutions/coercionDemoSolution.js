/**** IMPLICIT CONVERSION (TYPE COERCION): DEMO SOLUTION ****/

/*
    Under certain conditions, JavaScript will attempt to 
    convert data from one type to another without you having
    to explicitly convert it. We call this "type coercion."
*/

/** EXAMPLE 1 - CONCATENATION **/

// The "+" operator favors strings (concatenation).
// If JavaScript already has inferred that the value is a string, 
// any numbers will be converted to strings as well.
let sectorText = 'Sector';
let sectorNumber = 7;

// Concatenate the two variables above and store in a
// new variable; print it and its type to the console.
let fullSectorAddress = sectorText + ' ' + sectorNumber;

console.log(fullSectorAddress); // "Sector 7"
console.log(typeof fullSectorAddress); // string

/** EXAMPLE 2 - ARITHMETIC **/

// Other math operators favor numbers and will try to convert 
// a string to a number if possible
let totalDistanceKm = '1000';
let distanceTraveledKm = 400;
let oxygenLevel = '60';

// Calculate the remaining distance and store in a
// new variable; print it and its type to the console.
let remainingDistance = totalDistanceKm - distanceTraveledKm;
console.log(remainingDistance); // 600
console.log(typeof remainingDistance); // number

// Double the oxygen level and store in a
// new variable; print it and its type to the console.
let doubleOxygen = 2 * oxygenLevel;
console.log(doubleOxygen); // 120
console.log(typeof doubleOxygen); // number

/** EXAMPLE 3 - ANTICIPATING ERRORS WITH TYPE COERCION **/

// What happens if a string cannot be converted to a number implicitly?
let totalCargoMass = '12000 kg';
let numberOfCargoHolds = 3;

// Calculate the average mass per hold and store in a
// new variable; print it to the console to see the result.
let averageCargoMassPerHold = totalCargoMass / numberOfCargoHolds;
console.log(averageCargoMassPerHold); // NaN

// How do we fix it? Use explicit conversion techniques!

// Use explicit conversion as needed to complete the mathematical
// calculation, then use implicit conversion to add ' kg' to the result.
// Print the final result and its type to the console.
let avgMassPerHold = parseInt(totalCargoMass) / numberOfCargoHolds + ' kg';
console.log(avgMassPerHold); // 4000 kg
console.log(typeof avgMassPerHold); // number

// NOTE: There is also implicit conversion with boolean conditions, but we will
// cover some uses cases for that in the future.
