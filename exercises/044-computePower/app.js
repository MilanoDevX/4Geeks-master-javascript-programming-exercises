function computePower(num, exponent) {
  // your code here
  let power = 1;
  for (let i=1; i<= exponent; i++) {
    power = power * num;
  }
  return power;
}

let output = computePower(3, 2);
console.log(output); // --> 8
