/*Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

Notes:
It's guaranteed that each string is composed of two words
In case of two identical last names, keep the original order
Examples
For this input:

[
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
  "Donder Jonker", 
  "Blitzen Claus"
]
You should return this output:

[
  "Prancer Chua",
  "Blitzen Claus",
  "Cupid Foroutan", 
  "Vixen Hall", 
  "Donder Jonker", 
  "Comet Karavani",
  "Dancer Moore", 
  "Dasher Tonoyan",
]*/

//Parameter: does it have two parameters? take in first and last name, compare the first letter of the last name and sort in ascending order


//Return: reindeer in alphabetical order by their last name

//Examples:
//["Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall", "Comet Karavani", "Cupid Foroutan", "Donder Jonker",  "Blitzen Claus"]
// =>
//["Prancer Chua","Blitzen Claus","Cupid Foroutan", "Vixen Hall", "Donder Jonker", "Comet Karavani","Dancer Moore", "Dasher Tonoyan",]

//Psuedocode: 
function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a,b) => a.split(' ')[1].localeCompare(b.split(' ')[1]))
};