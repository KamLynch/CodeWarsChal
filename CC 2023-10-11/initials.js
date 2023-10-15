/*
Write a function to convert a given first and last name into initials. Only a first and last name separated by a single space will be provided, and capitalized initials should be returned separated by a single period. ex: Bob Vance => B.V
*/

//Parameters: string of first and last name with space between

//Results: return a string with the intials of the first and last name separated by '.'
//Examples:
// 'Kam Lynch' --> K.L
// 'Rico Lynch' --> R.L
// 'Cranberry Juice' --> C.J

//Psuedocode: write a function that takes in a name, grabs the first character of each name and return it with a '.' between

function abbrevName(name){
  let initials = name[0]+'.'
  for (let i=0; i<name.length; i++) {
    if (name[i] == ' ') {
      // name[i+1] is the next character after the found space
      initials += name[i+1]
    }
  }
  return initials.toUpperCase()
}