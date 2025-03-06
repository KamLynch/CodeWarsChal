/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
 */

//P pass in an array of num. will some indexes be empty?


//Rreturn same arr with invert values

//E [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]

//P
function invert(array) {
    // map through array and multiply by -1 to get the opposite
    let invrtArr = array.map((p) => p * -1);
   return invrtArr;
}
