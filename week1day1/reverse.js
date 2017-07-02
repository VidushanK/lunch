
function reverse(userInput){
var reverseStr = "";
 for(var i = userInput.length - 1; i >= 0; i--) {
    reverseStr += userInput[i];
  }
  return reverseStr;
}

console.log(reverse(process.argv[2]));