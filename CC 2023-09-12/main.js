//Given an array of integers, return a new array with each value doubled.
//
//For example:
//
//[1, 2, 3] --> [2, 4, 6]

//P: Is it going to be integers? are we going to be given any special characters? an empty arr ever?
//R: Return a new arr with each value doubled
//E: If given [2,3,4] should return [4,6,8]
//   If given [4,5,6] should return [8,10,12]
//   If given [2,22] should return [4,44]
//P: Make a function that takes in an array
function doubled(arr){
    return arr.map(e => e*2)
}
//map through array and multiply each element bu 2. 
doubled([4,6,7])