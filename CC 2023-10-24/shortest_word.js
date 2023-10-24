/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */


//Parameter: a string of words will be passed into a func

//Return: the length of the shortest word

//Example:
//assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
//assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

//Psuedocode: pass in a string, map through the string to find shortest word and return the length of it.

const findShort = s => Math.min(...s.split(' ').map(element => element.length))
