/* 
Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas".
 */

//P Take in a string. Sort Even first, then odd follows with space in b/w
//R return string with even indices first, then odd
//E "Cdwr oeas"
//P 
function sortMyString(S) {
    let array = S.split('');
    let evenGroup = '';
    let oddGroup = '';

    for (i = 0; i < array.length; i++){
        if (i % 2 == 0) {
            evenGroup += array[i];
        } else {
            oddGroup += array[i];
        };
        
    }
    console.log(`${evenGroup}  ${oddGroup}`);
} 