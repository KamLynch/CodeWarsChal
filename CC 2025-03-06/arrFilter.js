/* getEvenNumbers([2,4,5,6]) // should == [2,4,6] */

// Will the array only contain int? Can it be empty?
// return arr with only even int
// [2,3,4,5,6]  --> [2,4,6]
//take in arr, filter. % == 0 ? return to arr


function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    let eArr = [];
    eArr = (numbersArray.filter((i) => i % 2 === 0));
    return eArr
}