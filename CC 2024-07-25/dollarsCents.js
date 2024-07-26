/*
The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.


The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).


P: take in a interger/float
R: return a dollar amount
E: 3 --> $3.00 ; 3.1 --> $3.10 ; 39.99 --> $39.99
P: begin amount at $00.00, add the agrument and return total

*/

function formatMoney(amount){
    let money = amount.toFixed(2)
    return money;
};
