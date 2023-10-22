/* 
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/

//Parameters: an integer is passes in

//Return: return the nuber of digits that are passed in

//Example
/*
 [0, 1],
[9, 1],
[66, 2],
[12345, 5],
[128685, 6],
[9876543210, 10],
 [9007199254740991, 16]
*/

//Psuedocode: take in an integer, convert it to a string and return the length

function digits(n) {
 return n.toString().length;
}
