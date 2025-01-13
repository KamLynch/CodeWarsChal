/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
 */
//P need two param for Beast and Dish
//R func will return a boolean 
//E great blue heron", "garlic naan") -> true || ("chickadee", "chocolate cake")-> true || ("brown bear", "bear claw") -> false
function feast(beast, dish) {
    let beastFirstChar = beast[0];
    let beastLastChar = beast[length - 1];
    let dishFirstChar = dish[0];
    let dishLastChar = dish[length - 1];
    if (beastFirstChar == dishFirstChar && beastLastChar == dishLastChar) {
        return true
    } else {
        return false
    };
};