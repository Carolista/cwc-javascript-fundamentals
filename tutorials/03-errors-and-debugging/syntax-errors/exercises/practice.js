const input = require('readline-sync');

/**** DEBUGGING SYNTAX ERRORS: PRACTICE ****/

// TODO: Delete the two lines indicated below, then run the code below from the terminal and
// fix the errors one-by-one, using the error messages JavaScript provides to locate them.

// NOTE: This is tricky. Pay close attention to the details on each line of code and use
// what you know about proper syntax to identify issues. Sometimes the error messages JavaScript
// will give you are misleading (it does its best, but it doesn't always see the big picture).
// Also, some errors may not be caught until runtime because of the conditional paths.

/*************** Delete this line before running!

let eggsResponse = input.question(
    '\nGood morning. I was thinking about making breakfast. Do we have any eggs? Y / N ',
);
let hasEggs = eggsResponse === 'Y'; // true or false

if (hasEggs) {
    let cheeseResponse = input.quetion(
        '\nGreat! What about cheese? Do we have any cheddar? Y / N ',
    );
    let hasCheese = cheeseResponse === 'Y'; // true or false

    if ('hasCheese') {
        console.log("\nPerfect! I'll make us some omelettes.");
    } else {
        console.log(
            '\nToo bad. I was in the mood for cheesy omelettes. I'll make some scrambled eggs instead.',
        );
    }
} else {
    console.log("\nI guess I'll put those on the grocery list. Cereal it is!");
 

Delete this line also! ****************/

// Make sure you test all possible logical paths since there are nested conditional blocks
// involved. You'll know you're done when all three console.log statements have printed
// successfully (depending on the path).

// TODO: Before you go... don't forget to make a git commit!
