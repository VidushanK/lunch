var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

function joinList(conceptList) {
  var undefinedVal = "";
  for (var i = 0 ; i < conceptList.length; i++) {
    undefinedVal = undefinedVal + conceptList[i] + ', ';
  }
  return undefinedVal.slice(0,-2);
}