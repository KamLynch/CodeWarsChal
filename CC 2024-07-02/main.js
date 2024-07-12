/*
Jaden Smith, the son of Will Smith. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


Parameter : input will be a string
Return : the same string but with the first letter capitalize
Example : (How can mirrors be real if our eyes aren't real --> How Can Mirrors Be Real If Our Eyes Aren't Real)
Psuedocode : map through the string, if the previous index == 0 , then the next index should be capitalize
 */


String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};