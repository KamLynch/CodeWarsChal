/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */

//Parameters: a string of vowels

//Results: return the number of vowels that was in the string

//Examples:
// 'kambria' --> 3
// 'powerful' --> 3
// 'cat'  --> 1

//Psuedocode: filter through the string to count and return the amount of vowels the string contains. all letters in string are lower case.

function getCount(str) {
 return str.split('').filter(vowel => "aeiouAEIOU".includes(vowel)).length;
};