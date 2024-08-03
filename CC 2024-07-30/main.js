//Given an array / list[] of n integers, Separate The even numbers from the odds
//Return an array/list where Even numbers come first then odds
//Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .
//Array/list size is at least 4 .
//Array/list numbers could be a mixture of positives , negatives .
//Have no fear, It is guaranteed that no Zeroes will exists.
// menFromBoys({ 7, 3 , 14 , 17}) ==> return ({ 14, 17, 7, 3}) 


/*

P: an array passed in
R: return same array in a sorted fashion
E: ({ 7, 3 , 14 , 17}) ==> ({ 14, 17, 7, 3})
P: pass in array, map through array, if even number, sort smallest to largest. if not, sort largest to smallest

*/

function menFromBoys(arr) {
    arr = Array.from(new Set(arr));
    let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
    let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
    return even.concat(odd);
}
