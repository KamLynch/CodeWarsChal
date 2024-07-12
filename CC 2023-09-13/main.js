//You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
//
//As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
//
//Example (Input --> Output)
//
//"Hello World" --> "World Hello"
//"Hi There." --> "There. Hi"

//P: We need a function to reverse the words in a given string.
//R: Return the string in reverse order
//E:If given "I am going to be successful." should return "successful. be to going am I"
//  "I like cats" --> "cats like I"
//  "I love nature" --> "nature love I"
//P: Make a function that takes in a string.
// separate the string into an array, reverse the order and return it as a string.
function reverse(string) {
return string.split(' ').reverse().join(' ')
}





//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//Example(Input => Output):
//35231 => [1,3,2,5,3]
//0 => [0]

//P: Are you ever given an empty array or undefined?
//R: Whatever number is givern, it now split up into an array and the order of thenumber is reversed.
//E: If given 45673 => [3,7,6,5,4]
//              330 => [0,3,3]
//              undefined => NaN
//P: Makes a function that takes in a number
function reverseArray(num) {
    //turn number into string then to array
   let numArray = num.toString().split('').reverse()
    //Reverse array
    //make array numbers and return
    return numArray.map(e=>parseInt(e))
}




//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//
///Array can contain numbers or strings. X can be either.
//
//Return true if the array contains the value, false if not.

//P: Given array A and value x. Want to see if A has X in it. A can have numbers, strings. X can be a number or a string. Is it ever empty? undefined? What about special characters?
//R: True if x is in a, false if x is not. true..false(boolean)
//E: Given [1,2,3] as A and 4 as x, should return false
//   given [7,6,3] as A and 6 as x, should return True
//  given [] as A and 5 as x, should return false
//P: Make a function that takes in 2 parameters(array and random number)
function numInArray(arr, num) {
    //look through array to see if any elements that match num.
    //conditional: if they do, return true. if not, return false
    arr.map(elem=>elem === num ? true : false)
}
numInArray([1,2,3],4)