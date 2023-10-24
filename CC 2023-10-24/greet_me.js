/* 
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

//Parameters: take in a string

//Return: a greeting including the string passed in

//Examples:
//"riley" --> "Hello Riley!"
//"JACK"  --> "Hello Jack!"

//Psuedocode: pass in a string, the string should be returned as lowercase except the first letter.

var greet = function(name) {
  return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};