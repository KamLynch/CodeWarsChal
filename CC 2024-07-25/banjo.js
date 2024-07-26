/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

P: name (string) will be passed in
R: return string with name and stating whether they play the banjo
E:
P: pass in name and create literal with the name. if name begins with "R/r" theyre playing the banjo else not playing the banjo.

*/

function areYouPlayingBanjo(name) {
    if (name[0].toUpperCase() === 'R') {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
  return name;
}