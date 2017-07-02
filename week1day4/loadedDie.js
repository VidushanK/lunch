// cheatsheet for dice rolls
  // dice rolls must follow List orders
    // after each roll, the dice increments according to the list
// final output will be die number

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var die = 0;

  list[die];

  return function(increment) {
    increment = die++;
    return list[increment];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
