/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
 */

//P take in an array of booleans. possibly null/undefined
// return the number of 'true' in array
// E [undefined,null,false,true] --> 1 || [true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true] --> 17
// P
function countSheeps(sheep) {
    let totalOfTrue = 0
    for (let i = 0; i < sheep.length; i++){
        if (sheep[i] == true) {
            totalOfTrue = totalOfTrue++
        } else {
            return totalOfTrue
        };
    }
    return totalOfTrue
};