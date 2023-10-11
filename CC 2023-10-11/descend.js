/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */

//Parameters: a non negative integer

//Results: the integer sorted with the highest value first decreasing to the lowest

//Examples:
/*
 assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
    assert.strictEqual(descendingOrder(123456789), 987654321)
*/
//Psuedocode: take an integer as an argument, seperate, sort the digits and join them back together

function descendingOrder(n){
     return parseInt(String(n).split('').sort().reverse().join(''))
};