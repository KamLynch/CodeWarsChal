/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
 */

//Parameter: will there be any punctuation? special characters? pass in an array of words

//Return: return the array with the words sorted alphabetically by the last letter of each word.

//Example:
//assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
//assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
//assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);

//Psuedocode:
//take in a array into a function, sort the words ('a-z') based on last character of the word, target last element (length -1)

function last(x){
    return x.split(' ').sort( (a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1) );
}

