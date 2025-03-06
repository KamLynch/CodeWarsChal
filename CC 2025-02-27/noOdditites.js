/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
 */

//take in an array
// will it return a string of non-odd numbers? and array of non-odd numbers?
// [0,1] -> [0] || [2,4,7,1,4] => [2,4,4]

function noOdds(values) {
    //create empty array
    let evenArray = [];
    //iterate through array, if divisible by 2, push to empty array
    for (let i = 0; i < values.length; i++){
        if (values[i] % 2 == 0) {
            evenArray.push(values[i])
        }
    };
    // Return all non-odd values
    console.log(evenArray)
}


//couldve also used filter() method to complete solution