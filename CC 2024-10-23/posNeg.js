/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
*/

function countPositivesSumNegatives(input) {
    let posArr = input.filter((pnum) => pnum > 0);
    // take in an array of integers. could be empty
    // return array with 2 numbers or empty array
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] => [10, -65]
    // .contains num > 0
    // if neg, add
    return reduceArr;
}

input.map((num) => {
    if (num > 0) {
        // count positions
    } else if (num < 0) {
        num+ num
    } else {
        return [];
    }
})