/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398


P: an array of nums
R: integer
E: Input: [1, 5.2, 4, 0, -1] --> Output: 9.2
    Input: [] --> Output: 0

p: map through arr and return the added value; if empty array return 0
*/

function arrSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum = sum += array[i]
        return sum
    };
};
