/*You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.*/

//P --> take in an object
//R -->  array with names that have atleast a value of 60 in descending work
//E --> {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]

function overSixty(obj) {
     // empty arr for passable numbers
const overSixZero = [];    
    // iterate thru obj, turn objects into arr
    for (const [key, value] of Object.entries(obj)) {
       //if value >= 60 push to arr
        value >= 60 ? overSixZero.push(key) : overSixZero;
    }
//sort and return array
    const sorted = overSixZero.sort((a, b) => obj[b] - obj[a]);
    console.log(sorted)
}
