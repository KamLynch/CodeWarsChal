/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

//Parameters: an array of strings. No strings have the same length

//Result: an array of strings listed by length

//Examples: 
/*
Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
  });
  it("Test 2",function(){
    Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
  });
  it("Test 3",function(){
      Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]), ["Short", "Longer", "Longest"]);
      */

//Psuedocode: write a function that takes in an array, sort the strings in array by length from smallest length.

function sortByLength(array) {
  return array.sort((a,b) => a.length - b.length);
};