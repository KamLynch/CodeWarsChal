/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
//P: build a function that takes in true and returns "yes" or takes in false and return "no"
//R:
//E: If given true => "yes"
//   If given false => "no"
//P:
function boolToWords(boolean) {
    if (boolean == true) {
        return "Yes"
    } else {
        return "No"
    }
}


/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/
//P: Write a function with two parameters (a number and a string). Return the string the amount of times as the given integer
//R:take the string given. use the split method, multiply the string a certain amount of times and then return the string for that many times.
//E: If given (3, "calmSpirit") => "calmSpiritcalmSpiritcalmSpirit"
//   If given (2, "pea") => "peapea"
//P:
function stringRepeat(int, str) {
    return str.repeat(int)
}