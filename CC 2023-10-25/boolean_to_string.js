/* 
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

//Parameter: pass in a boolean of true or false

//Return: a string 

//Example:
// true --> "true"
// false --> "false"

//Psuedocode: create a function that passes in a boolean, create a conditional.

function booleanToString(b){
    if (b == true) {
      return 'true'
    } else {
        return 'false'
    };
}