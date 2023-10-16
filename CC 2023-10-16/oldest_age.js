/* 
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/

//Paramters: take in an array of numbers, will always be given at least 2.

//Result: an array of the two biggest numbers that was passed in

//Examples:
/*
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
 */

//Psuedocode: create a function that takes in an array, pop the two largest numbers off the array. return the two numbers with the highest numbers, sorted for smallest to highest.

function twoOldestAges(ages){
    let old = ages.sort((a, b) => a - b);
    old = old.splice(-2, 2);
    return old
}
