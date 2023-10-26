/*
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
 */

//Parameter: will the string always be words? will the string ever be empty? pass in a string of words.

//Return: reuturn the words backwards in the string

//Example:
//"Hello World" --> "World Hello"
//"Hi There." --> "There. Hi"
//assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
//assert.strictEqual(reverse('This is so easy'), 'easy so is This');

//Psuedocode: create a func that pass in a string as a parameter, split the string reverse the words and join back together

function reverseWrd(string) {
     return string.split(' ').reverse().join(' ');
}