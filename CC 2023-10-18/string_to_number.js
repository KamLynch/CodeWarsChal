/*
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
 */

//Parameters: a string of numbers is passed in

//Result: return the string of numbers as integers

//Examples:
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

//Pseudocode: take in a string of numbers as an argument, convert the string into an integer and return the integer.

const stringToNumber = function(str){
  return Number.parseInt(str)
}