/*
P:Input is going to be a string with at least two characters
R:The same string returned without the first and letter
E: elephant --> lephan, place --> lac
P: slice the first and last characters by identifying their indexes


//Parameters (input)
//return (output)
//Examples: (elephant --> lephan, place --> lac)
//Psuedocode (talking how you would complete it without completing it)

*/

function removeChar(str) {
    let characterRemoved = str.slice(1,-1)
   console.log(characterRemoved)
};


/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
P: the input will be a string that contains lowercase &/or spaces
R: an integer will be returned
E: (pizza --> 2; caring --> 2)
P: iterate through the string, declare 0 and set vowels to 1, split and add vowels and return the total number.

*/

function getCount(str) {
    let integerCount = 0;
    let vowels = ['a','e','i','o','u']
    for (let i = 0; i < str.length; i++) {
        for (let u = 0; u < vowels.length; u++){
            if (str[i] == vowels[u]) {
                integerCount++
            }
        }  
    }
    return integerCount;
}