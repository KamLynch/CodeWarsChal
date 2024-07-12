/*
Please write a function that sums a list, but ignores any duplicated items in the list.

For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4.

Parameter: an array; will it only consist of integers?
Return: an integer
Example: ([1, 10, 3, 10, 10] --> 4; [3, 4, 3, 6] --> 10)
Psuedocode: filter through the array, remove the duplicates and reduce the remaining integers by adding them together
*/


function sumNoDuplicates(numList) {
return numList.filter((i)=> numList.indexOf(i) == numList.lastIndexOf(i)).reduce((a,b)=> a + b, 0)
}