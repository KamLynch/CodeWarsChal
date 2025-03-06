/* Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers. */
// takes in arr of strings? will it be empty?
// return arr of int
// ["1", "2", "3"] --> [1, 2, 3]
// split -> remove strings -> join
function toNumberArray(stringarray) {
    return stringarray.map(Number)
}