function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length == 0) {
    return 0;
  }
  let arrayOfNumbers = arr.filter((item) => typeof(item) == "number");

  if (arrayOfNumbers.length == 0) {
    return 0;
  } else {
    let smallestNumber = arrayOfNumbers[0];
    for (element of arrayOfNumbers) {
      if (element < smallestNumber) {
        smallestNumber = element;
      }
    }
    return smallestNumber;
  }
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
