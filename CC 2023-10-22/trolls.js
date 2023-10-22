/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

//Parameters: take in a string of words

//Return: return same string with the vowels removed

//Example:
//assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
//assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

//Psuedocode: take in a string, transform into an array and filter through the array, remove ('a','e','i','o','u'), convert array back to string

function disemvowel(str) {
    let vowels = 'aeiou'
  return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('');;
}