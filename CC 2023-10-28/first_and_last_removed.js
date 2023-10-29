/**
 It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */

 //Parameter: a string is being passed into the function. always more than 3 letters.

 //Return: return same string with the first and last character missing

 //Example:
 //assert.strictEqual(removeChar('eloquent'), 'loquen');
 //   assert.strictEqual(removeChar('country'), 'ountr');
 //   assert.strictEqual(removeChar('person'), 'erso'

 //Psuedocode: func that takes in string, declare variable for new string. splice the first and last character and return new string

 function removeChar(str){
     return str.slice(1, -1);
};
