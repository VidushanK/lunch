// create a function that checks if user input is a number
  // the function must take one userInput & convert into an integer
// create a function that
    // random numbers must be between 1-6
// return userInput value along with random dice rolls

var userInput = process.argv[2];
var individualDice = [];
var finalSum =0;

function diceRoll(userInput){
  for(var i = 0; i < userInput; i++) {
    var currentDice = Math.floor(Math.random() * 6 + 1);
     individualDice.push(currentDice);
     finalSum += currentDice;
  }
  return finalSum;
}
diceRoll(userInput);
console.log("Rolled " + userInput + " dice: "  + individualDice.join());