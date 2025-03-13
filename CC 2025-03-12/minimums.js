/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
*/

// pass in nested array
// return a integer (value of all mins)
// [ [1,2,3,4,5]  min value: 1 , [ 5, 6, 7, 8, 9 ]   min value: 5 , [ 20, 21, 34, 56, 100 ] min value: 20
//] sum = 26



//incorrect solution    
function sumOfMinimums(arr) {
    let totalOfMin = [];
    let min1 = totalOfMin.push(Math.min(...arr[0]));
    let min2 = totalOfMin.push(Math.min(...arr[1]));
    let min3 = totalOfMin.push(Math.min(...arr[2]));
    let min4 = totalOfMin.push(Math.min(...arr[3]));
    totalOfMin = totalOfMin.reduce((i,acc) => i+ acc)
    
    console.log(totalOfMin)
}