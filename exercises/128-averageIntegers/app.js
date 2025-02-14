function average(arr) {
  // your code here
  if (arr.length == 0) {
    return 0;
  } else {
    let avg = sum(arr) / arr.length;
    return avg;
  }
}

function sum(arr) {
  // your code here
  let totalSum = 0;
  for (element of arr) {
    totalSum = totalSum + element;
  }
  return totalSum;
}

console.log(average([1, 2])); // --> 1.5
