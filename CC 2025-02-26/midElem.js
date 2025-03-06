/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers
 */

//pass in an array with three integers
//it will return the index of the numerical index that is greater than one integer but less than the other
//gimme([2, 3, 1]) => 0

const gimme = (arr) => {
    const orderedNum = [...arr].sort((a, b) => a - b);
    let middleVal = orderedNum[1];
    console.log(arr.indexOf(middleVal))
    };