/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

// takes in array; "needle" should appear in array only once
// returns a string with the index of the found word
// ["hay", "hay", "moreJunk", "needle"] --> "found the needle at position 3"
// Take in an array -> iterate and find 'needle' return string that states where word was found

function findNeedle(haystack) {
    return "found needle at" + haystack.indexOf('needle')
}