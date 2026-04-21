/**** NAMING VARIABLES: SOLUTION ****/

/*
    Whether it's just you working on a solo project or a massive code base 
    shared by hundreds of people, it is essential to name your variables well.

    Variable names should be descriptive and meaningful to eliminate ambiguity.
    
    Indicate the data type without putting it in the name
      - Strings should be nouns (with adjectives as needed) that point to a specific identity.
        Examples: destinationPlanet, superCamMode
      - Numbers should describe not only what it represents but include units.
        Examples: distanceRemainingKm, maxCameraMemoryGB
      - Booleans should ask a question that can be answered true/false, beginning with a verb.
        Examples: hasLanded, isCameraLensOpen
*/

// 🚩 BAD: Vague context, hard to maintain
let name = "Perseverance";
let amount = 28; // imagine trying to search for this in your massive codebase!
let solarPanel = true;
let phase = "Exploring";
let pos = "18°N, 225°E";

// ✅ BETTER: The "Rover" Profile
let roverName = "Perseverance";
let primaryBatteryVoltage = 28;
let isSolarPanelExtended = true; // say it out loud — is it a question?
let currentMissionPhase = "Exploring";
let currentPosition = "18°N, 225°E";
