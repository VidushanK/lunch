// sort numbers
// function sortArr(a,b){
//  return a-b;
// }
// var array = [10, 2, 5, 1, 9];
// array.sort(sortArr);

// sort students with same names by age
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function sortArr(a,b){
 return a+b;
}
students.sort(function(a,b){return a.age - b.age;});
students.sort(function(a,b){var nameA = a.name; var nameB = b.name;
if(nameA < nameB)
{
return -1; // if name
} else if(a.name > b.name){
return 1;
}
return b.age - a.age;
});
