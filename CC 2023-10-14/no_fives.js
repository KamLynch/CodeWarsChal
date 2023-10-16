/* 
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/

//Parameter: given 2 numbers, the first and last number. Numbers can be negative, any number containing 5 should be left out

//Result: a total of digits that are between the two numbers given in the argument

//Example: 
//1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
//4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

//Pseudocode: Create a function that takes in two numbers, the first number should be smaller than the second number. Create an array with the two numbers, map through the numbers and sum the amount of integers that are listed between the two given numbers, exxcluding any numbers containing 5.

function dontGiveMeFive(start, end) {
    let count = [];
    for (let i = start; i <= end; i++){
        if (!i.toString().includes('5')) count.push(i);
    }
    return count.length;
}