/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.


*/

//Parameter: pass in an array of strings? will it ever be an empty string? will the strings always be words?

//Return: return a filtered string containing only your friends

//Example:
// assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
//assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
//assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
//assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])

//Psuedocode: create a function, filter through and create a string with names that are only 4 characters

function friend(friends){
  return friends.filter(n => n.length === 4)
}