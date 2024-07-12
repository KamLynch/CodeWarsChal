/*
Given an integral number, determine if it's a square number:

Parameter: an integer
Return: boolean (true or false)
Example: 16 -> true ; 15 -> false ; 4 -> true ; 23 -> false
Psuedocode: divide the number that is passed in by itself, if == 0 return true else return false
*/

var isSquare = function (n) {
  let rooted = Math.sqrt(n);
  if (Number.isInteger(rooted)) {
    return true;
  } else {
    return false;
  }
};
