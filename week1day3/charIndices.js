function countLetters(userInput)
{
  var uniqueCharacter = {};
  var noSpace = userInput.split(" ").join("");
  for (var i = 0; i <= noSpace.length; i++)
  {
    if (uniqueCharacter[noSpace[i]] <= i)
    {
      uniqueCharacter[noSpace[i]].push(i);
    }  else{
      uniqueCharacter[noSpace[i]] = [i];
    }
  }
  return uniqueCharacter;

}
 console.log(countLetters("lighthouse in the house"));
