/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals.The number of petals is always greater than 0.
*/


function howMuchILoveYou(nbPetals) {
    // P: an integer > 0 will be passed in

    // R: a string will be return based on the integer passed in

    // E: (howMuchILoveYou(7) ==> "I love you")
    // (howMuchILoveYou(3) ==> "a lot")
    // (howMuchILoveYou(6) ==> "not at all")
    
    //P:
    let cuteSayings = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    cuteSayings.copyWithin(5, 0, 5);
    let findIndex = cuteSayings(nbPetals);
    console.log(findIndex)
   
}