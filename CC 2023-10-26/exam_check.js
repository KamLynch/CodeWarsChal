/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
 */

//Parameter: take in 2 arrays

//Return: an integer respresented as a test score will be returned

//Example:
/*
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
 */

//Psuedocode: pass 2 arrays into the func, if the letter at each index match add 4 points, if they are different subtract 1 point, if there is a blank index dont add anything to the score. sum the points and return the value

function checkExam(arr1, arr2) {
let score = 0;
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === arr2[i]) {
            score += 4
        } else if (arr2[i] === '') {
            score += 0
        } else {
            score -= 1
        }
    }
  if(score < 0){
    score = 0
  }
    return score
}