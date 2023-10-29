/*
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
 */

//Parameter: create a function that takes in two parameters

//Return: return a boolean of true or false

//Example:
 //assert.strictEqual(correctTail("Fox", "x"), true);
// assert.strictEqual(correctTail("Rhino", "o"), true);
// assert.strictEqual(correctTail("Meerkat", "t"), true);

//Psuedocode:





function correctTail(body, tail){
  
let sub = body.substr(body.length-(tail.length));
  
  if (sub === tail){ 
    return true
  }
  else {
    return false
    }
  }