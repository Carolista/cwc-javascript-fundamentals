/**** CONSTANTS: SOLUTION ****/

/*
    While let is for data that fluctuates (like your ship's 
    current fuel), const is for values that are immutable 
    (unchangeable).

    The const Keyword: Once you assign a value to a constant, 
    you cannot re-assign it. Attempting to do so will throw a 
    TypeError.

    SCREAMING_SNAKE_CASE: While standard variables use camelCase, 
    "Global Constants" (values that are known before the program 
    even runs) often use all capital letters with underscores.

    Why use it? It makes these values stand out immediately in 
    your code. When a dev sees MAX_SPEED, they know exactly what 
    it is without having to look at where it was defined.
*/

/** EXAMPLE 1 - THE IMMUTABILITY RULE **/ 

const MISSION_NAME = "Ares V";
// MISSION_NAME = "Ares VI"; // ❌ ERROR: Assignment to constant variable.

/** EXAMPLE 2 - SCREAMING_SNAKE_CASE USES **/ 

// Physics and Math constants
const PI = 3.14159;
const GRAVITY_EARTH = 9.8;

// Configuration settings
const MAX_PASSENGERS = 5;
const API_KEY = "XP-99-BETA";
const DEFAULT_LANGUAGE = "EN-US";

/** EXAMPLE 3 - CONST vs LET **/

const BIRTH_YEAR = 1995; // This will never change.
let currentAge = 31;     // This changes every year.
