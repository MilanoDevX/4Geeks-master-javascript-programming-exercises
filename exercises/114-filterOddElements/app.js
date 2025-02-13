function filterOddElements(arr) {
  // your code here
  let oddElements = arr.filter((item) => {
    if (item % 2 != 0) {
      return item;
    }
  });
  return oddElements;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
