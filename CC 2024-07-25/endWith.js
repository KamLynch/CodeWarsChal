/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

P: take in two arguments
R: boolean of true or false
E: ('abc', 'bc') -> true ; ('abc', 'd') -> false
P: compare the last 2 letters of first string with first two of the second string



function solution(str, ending){
    if (str.charAt(str.length - 1) === ending[1] && str.charAt(str.length - 2) === ending[0]) {
     return true
    } else {
        return false
 }
}
*/

function solution(str, ending) {
    return str.endsWith(ending);
}

