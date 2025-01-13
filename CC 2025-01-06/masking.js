/*
Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

    //P Does it take in numbers & letters?
    //R Replace all the characters with a hashtag except last 4 only if it contains >4 chars.
    //E "4556364607935616" --> "############5616" : "64607935616" --> "#######5616" : "1"--> "1" : "" --> ""


function maskify(cc) {
    let replaceChar = cc.split('')
    for (let i = 0; i < cc.length - 4; i++) {
        replaceChar[i] = '#';
    }
    replaceChar = replaceChar.join("");
    return replaceChar;
};