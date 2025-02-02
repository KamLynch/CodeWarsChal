/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
 */

//P pass in an array of num. will some indexes be empty?


//Rreturn same arr with invert values

//E [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]

//P
function invert(array) {
    /* loop (for) through array, create if else statement
    for (let i = 0; i <= array.length; i++){
        if(array[i] > )
    }*/
    // map through array 
    let invrtArr = array.map((p) => p * -1);
   return invrtArr;
}
