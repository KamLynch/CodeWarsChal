/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

//Parameters: taken in a string

//Return: the string in reverse words

//Examples:
//assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//assert.strictEqual(reverseWords('apple'), 'elppa');
//assert.strictEqual(reverseWords('a b c d'), 'a b c d');
//assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

//Psuedocode: take in a string, split the string into an array, reverse the string and join the string back together

function reverseWords(str) {
    return str.split(' ').map(str=>str.split('').reverse().join('')).join(' ')
}