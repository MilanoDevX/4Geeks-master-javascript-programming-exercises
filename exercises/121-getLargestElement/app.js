function getLargestElement(arr) {
  // your code here
  let largestElement = arr[0];
  if (arr.length == 0) {
    return 0;
  } else {
    for (element of arr) {
      if (element > largestElement) {
        largestElement = element;
      }
    }
    return largestElement;
  }
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;