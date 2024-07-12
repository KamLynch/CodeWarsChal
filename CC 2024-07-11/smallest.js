/*
Given an array of integers your solution should find the smallest integer.

Parameter: an array of integers; empty array will not be passed
Return: smallest integer will be returned
Example: [34, 15, 88, 2] -> 2 ; [34, -345, -1, 100] -> -345
Psuedocode: map through the array, compare each number to the other and
*/

function findSmallestInt(arr) {
    let sorted = arr.sort((a,b) => a - b)[0];
  return sorted;
}