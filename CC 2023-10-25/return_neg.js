/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 */



//Parameter: pass in an integer, can be positive or negative

//Return: return a negative integer

//Example:
/*
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
 */

//Psuedocode: pass an integer into the function, get the absolute value of the integer and add a negative symbol

function makeNegative(num) {
  if(num === 0 ){
    return 0
  }else if(num !== 0){
    return - + Math.abs(num)
  }
}