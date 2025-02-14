function computeSumOfAllElements(arr) {
  // your code here
  let sum = 0;
  for (element of arr) {
    sum = sum + element;
  }
  return sum;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
