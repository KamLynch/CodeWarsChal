/*Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
    - 34: 34
*/
//P:
//R:
//E:
//P:

function opposite(number) {
    return number * (-1)
}

/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
//P:
//R:
//E:
//P:
word => {
    word.split('').reverse().join('')
}