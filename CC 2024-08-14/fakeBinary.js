/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the
resulting string.

Note: input will never be an empty string

P: a sttring of numbers
R: a string of 0 and 1s
E: '45385593107843568' => '01011110001100111'
P: if num < 5, replace num with 0 , otherwise replace number with 1

*/
function fakeBin(x) {
    let strToArray = x.split('').map((x) => x < 5 ? 0 : 1).join('')
    };