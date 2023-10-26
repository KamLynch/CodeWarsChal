/* You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
For example, repeats([4,5,7,4,5,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
*/

//Parameter: pass in an array. Will the array ever be words? will it ever be empty?

//Return: a sum of numbers that appear once in array

//Examples:
//repeats([9,10,19,13,19,13]) = 19
//repeats([4,5,7,4,5,8]) = 15

//Psuedocode: pass an arr into the function, filter through the array and return the sum of the integers that don't repeat

function repeat(arr) {
   return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,c) => a + c, 0)
}