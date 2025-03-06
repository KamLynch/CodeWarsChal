/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. */

// will the chars in the string only be X & O? empty string possible? if no X & O, return true
// return a boolean

function XO(str) {
    //split string 
    str = str.toLowerCase().split('');
    // filter X & O and check length
    let evenChars = str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
    console.log(evenChars)
    //code here
}