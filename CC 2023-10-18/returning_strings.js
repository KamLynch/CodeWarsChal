/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
 */

//Parameter: a name is passed in

//Return: a string with the name inputed included

//Examples:
    // assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    // assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");

//Psuedocode: create a function that takes in a name and returns the string "Hello, <name> how are you doing today?".

function greet(name){
  return `Hello, ${name} how are you doing today?`
}