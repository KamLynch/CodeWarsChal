/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */

//Parameters: take in a string. The string will not have less than two characters

//Examples:
//  assert.strictEqual(removeChar('eloquent'), 'loquen');
//     assert.strictEqual(removeChar('country'), 'ountr');
//     assert.strictEqual(removeChar('person'), 'erso');
//     assert.strictEqual(removeChar('place'), 'lac');
//     assert.strictEqual(removeChar('ooopsss'), 'oopss');

//Pseudocode: take in a string as an argument, remove the first and last character and return the remaining characters

function removeChar(str){
   return str.slice(1,-1)
};