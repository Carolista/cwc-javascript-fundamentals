const input = require('readline-sync');

/**** DEBUGGING SYNTAX ERRORS: PRACTICE SOLUTION ****/

// Delete the two lines indicated below, then run the code below from the terminal and
// fix the errors one-by-one, using the error messages JavaScript provides to locate them.

// NOTE: This is tricky. Pay close attention to the details on each line of code and use
// what you know about proper syntax to identify issues. Sometimes the error messages JavaScript
// will give you are misleading (it does its best, but it doesn't always see the big picture).
// Also, some errors may not be caught until runtime because of the conditional paths.

let eggsResponse = input.question(
	'\nGood morning. I was thinking about making breakfast. Do we have any eggs? Y / N '
);
let hasEggs = eggsResponse === 'Y'; // true or false

if (hasEggs) {
	let cheeseResponse = input.question(
		// Fixed typo in method name.
		'\nGreat! What about cheese? Do we have any cheddar? Y / N '
	);
	let hasCheese = cheeseResponse === 'Y'; // true or false

	if (hasCheese) {
		// Was a string instead of variable reference
		console.log("\nPerfect! I'll make us some omelettes.");
	} else {
		console.log(
			"\nToo bad. I was in the mood for cheesy omelettes. I'll make some scrambled eggs instead."
			// Fixed quotes here. I chose to use double quotes to enclose, but you may have chosen
			// to escape the apostrophe instead. Either works!
		);
	}
} else {
	console.log("\nI guess I'll put those on the grocery list. Cereal it is!");
} // Was missing the closing brace

// Make sure you tested all possible logical paths since there are nested conditional blocks
// involved. You'll know you're done when all three console.log statements have printed
// successfully (depending on the path).
