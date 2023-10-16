/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)
"CodEWaRs" -- > [0, 3, 4, 6]
*/
//Parameter: Given a word of lowercase and uppercase letters

//Results: an array of indexes that contain a capital letter

//Example:
//"CodEWaRs" -- > [0, 3, 4, 6]

//Psuedocode: create an array, iterate through the array to find capitalized letters and return the index of those in an array

var capitals = function (word) {
    let capitalized = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() == word[i]) capitalized.push(i);
    }
    return capitalized
};



































21636
500 42272