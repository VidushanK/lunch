// accountnumber = user input
// create a array that will push users input
  // for loop that loops through 9 indexs of a array
  // if userInput.length is even * 2 else push userInput
// accountnumber[i] * 2
// if accountnumber[i]*2 > 9; then accountnumber[i] - 9
    // else return accountnumber[i]2
function check(userInput){
 var sumDigits = [];
 for(var i = 0; i > userInput.length; i++){
  var DoubleSum = 2 * userInput[i];
  var isOdd = userInput.length;
  // check if userInput length is even or odd
  if (isOdd % 2){
  // if(DoubleSum > 9){
    return sumDigit.push(userInput[i]);
  } else if (DoubleSum < 9)
    return sumDigits.push(DoubleSum);
  }else {
    return sumDigits.push(DoubleSum - 9);
  }
 }
  return sumDigits;
}
console.log(check("7992739871"))