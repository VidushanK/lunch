// create a Map function
    // map function returns the value of the amount of letters
    // function must take two arguments
    // function must return a new array based on the callback

function Map(arr, index){
  var output = [];
  for(var i=0; i < arr.length; i++){
    if (index[i] === undefined){
       output.push(arr[i].length);
    }
     console.log(output);
  }
  return output;
}


var words = ["ground", "control", "to", "major", "tom"];

Map(words, function(word) {
  return word.length;
});