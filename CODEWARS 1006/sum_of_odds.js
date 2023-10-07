/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

//Parameters: a triangle of consecutive odd numbers with n rows, where n starts with 1, input is the row number
//Results: the sum of the numbers in row n
//examples:
//     assert.strictEqual(rowSumOddNumbers(42), 74088);
// 1 -->  1
//2 --> 3 + 5 = 8
//Pseudocode

function rowSumOddNumbers(n) {
	return Math.pow(n,3)
}