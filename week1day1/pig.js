// create an array to input the user input
// for loop to push userInput
// create a new function that will slice the the first letter and add ay
// user join(' ') to remove the array and only output the string
// slice the userInput to return the user input in a array
var userInput = process.argv.slice(2);
var result = [];
for (var i = 0; i < userInput.length; i++) {
  result.push(translate(userInput[i]));
}
function translate(word) {
  return word.slice(1, word.length) + word[0] + "ay";
}
console.log(result.join(' '));