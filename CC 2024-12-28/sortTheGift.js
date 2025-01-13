function sortGiftCode(code) {
    //P take in a string of letters
    //R returns the string in order from a-z
    //E "abcdef" --> "abcdef" : "pqksuvy"-- > "kpqsuvy" : "zyxwvutsrqponmlkjihgfedcba"-- > "abcdefghijklmnopqrstuvwxyz"
    //P Split the string apart. 
    let splitGifts = code.split('');
    // Sort in ascending order
    let sortedGifts = splitGifts.sort().join('');
    console.log(sortedGifts)
}