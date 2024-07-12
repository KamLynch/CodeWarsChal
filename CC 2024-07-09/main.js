/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F



Parameter (input) --> two strings
Return (output) --> a string with two initials separated by a dot
Example: Sam Harris -> S.H ; Kam Lyn -> K.L
Pseudocode --> Take in two strings , map through the string, slicing two letters, capitalize and return the sliced letters
*/

function abbrevName(name){
    let nameSlice = name.split(" ");
    console.log(nameSlice[0][0] + '.' + nameSlice[1][0]).toUpperCase()
  //  console.log(nameSlice[0] + '.')
    // code away
};