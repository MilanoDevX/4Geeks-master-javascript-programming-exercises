function joinArrayOfArrays(arr) {
  // your code here
  let arrayOfArrays = [];
  for (element of arr) {
    arrayOfArrays = arrayOfArrays.concat(element);
  }
  return arrayOfArrays;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
