function squareElements(arr) {
  // your code here
  let sqrElements = arr.map((item) => item * item);
  return sqrElements;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
