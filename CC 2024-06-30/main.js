/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'


P: a string will be passed in as a parameter
R: a string in the reverse
E: (world --> dlrow , word --> drow)
P: split the word into separate strings, reverse the order and combine the letters back into one word
 */

function reverseWord(str) {
    let strSplit = str.split('').reverse().join('');
    console.log(strSplit)
};