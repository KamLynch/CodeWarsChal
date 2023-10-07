/*There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/

//P: The first number is amount of mangoes, second number is price/unit. The third mango is free.
//R: Write a function to calculate total cost of mangoes
//E: if given mango(1,3) ==> 3, no free mango
//   if given mango(6,3) ==> 12, 2 free mangoes
//  if given mango(10,5) ==> 35, 3 free mangoes
//P:
function costOfMangoes(num, unit) {
    let free = Math.floor(num / 3)
    return (num-free) * unit
}

/*We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/
//P: Take in an integer and return it as a string
//R: Can it be an integer?
//E: If given 23 ==> "23"
//      given 4.2 ==> "4.2"
//P: 
function intToStr(num) {
    return num.toString()
}


/*Friday 13th or Black Friday is considered a unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/
//P:
//R:
//E:
//P:
function unluckyDays(year) {
    let unlucky = 0;
    for (let i = 0; i < 12; i++){
        if (new Date(year, i, 13).getDay() === 5) {
            unlucky++
        }
    }
    return unlucky
}