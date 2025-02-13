function computeProductOfAllElements(arr) {
  // your code here
  let productOfAllElements = 1;
  if (arr.length == 0 ) {
    productOfAllElements = 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      productOfAllElements = productOfAllElements * arr[i];
    }
  }
  return productOfAllElements
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
