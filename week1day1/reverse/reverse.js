"use strict";
var finalOut = reverse(userInput);
function reverse(userInput){
var i = 0;
 for(i = userInput.length - 1; i >= 0; i--) {
    finalOut += userInput[i];
  }
  console.log(finalOut);
}
console.log(finalOut);
