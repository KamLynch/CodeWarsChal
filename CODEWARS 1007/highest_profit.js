/*

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

*/

//Parameters: an array containing numbers

//Result: and array containing two numbers. the lowest number listed first followed by the highest number that was passed in the array

//Examples:
//[1,2,3,4,5] --> [1,5]
//[2334454,5] --> [5,2334454]
//[1]         --> [1,1]

//Pseudocode: write a function that takes in an array, sorts through it and returns an array with the lowest and highest value (always in that order)

function minMax(arr) {
    let lowestVal = Math.min(...arr);
    let highestVal = Math.max(...arr)
    let combinedValues = [lowestVal, highestVal];
  return combinedValues; 
}