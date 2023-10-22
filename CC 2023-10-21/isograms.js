/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
 */

//Parameters: take in a string as an argument

//Return: a boolean is returned

//Example:
/*
assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
*/

//Psuedocode: take in a string of words. If the string has repeating letters return false, if there are no repeating letters, return true

function isIsogram(str){
  word = str.toLowerCase().split("").sort();
  for (let i = 0; i < word.length-1 ; i++){
    if (word[i] == word[i+1]) return false;
    }
  return true;
}