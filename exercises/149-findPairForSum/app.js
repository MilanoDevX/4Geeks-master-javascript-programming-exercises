function findPairForSum(array, number) {
  // your code here
  for (x of array) {
    let aux = number - x;
    for (y of array) {
      if (y != x && y == aux) {
        return ([x, y]);
      }
    }
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
