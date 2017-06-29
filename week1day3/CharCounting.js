var userInput = process.argv[2];

function countLetters(userInput)
{
  var uniqueCharacter = {};
  var noSpace = userInput.split(" ").join("");
  for (var i = 0; i <= noSpace.length; i++)
  {
    if (uniqueCharacter[noSpace[i]] <= i)
    {
      uniqueCharacter[noSpace[i]] += 1;
    }  else{
      uniqueCharacter[noSpace[i]] = 1;
    }
  }
  return uniqueCharacter;

}
 console.log(countLetters("lighthouse in the house"));
