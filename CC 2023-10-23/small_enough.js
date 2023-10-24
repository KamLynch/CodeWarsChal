/* 
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

//Parameter: two arguments will be passed into the function; an array of numbers and a interger. Will the array on contain integers? will strings ever be passed in the array?

//Return: a boolean will be returned

//Example:
//assert.strictEqual(smallEnough([66, 101], 200), true);
//assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
//assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
//assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

//Psuedocode: Create a func that takes in an array of integers and a single integer. create a conditional to see if all of the numbers in the array are smaller than or equal to the single integer (limit value). If all of the integers in the array are smaller than the limit value a boolean of true will be returned, else it will return false. 


function smallEnough(a, limit){
	for (let i = 0; i < a.length; i++){
  	if (a[i] > limit) {
    	return false
    }
  }
  return true
}