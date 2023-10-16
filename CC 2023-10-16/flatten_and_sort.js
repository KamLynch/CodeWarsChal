/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
 */

//Parameters: multiples arrays passed in. Can empty arrays be passed in?

//Results: one array with all the numbers sorted that was passed into the function

//Examples:
/*
assert.deepEqual(flattenAndSort([[], [1]]), [1]);
    assert.deepEqual(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
    */

//Psuedocode: create a function that takes in more than one array, combined the arrays into a singular array and sort the numbers from lowest to highest

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat().sort((a,b) => a - b);
}