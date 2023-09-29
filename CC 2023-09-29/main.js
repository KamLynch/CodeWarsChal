/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

//P: Can the arr have booleans or strings? empty array?
//R: return the sum of only the positive numbers. If nothing is passed in, should be equal to 0.
//E: If given [2,-5,3,4] => 2 + 3 + 4 = 9
//      given [-2,1,5,33] => 1 + 5 + 33 = 39
//P:Make a function that takes in an array that filters through to grab positive numbers


function posNum(arr) {
    let sum = 0;
  for(i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        sum += arr[i];
      }
  }
    return sum
}