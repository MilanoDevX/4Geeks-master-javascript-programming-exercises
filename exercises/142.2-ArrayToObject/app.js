function fromListToObject(array) {
  // your code here
  let obj = {};
  for (element of array) {
    let key = element[0];
    let value = element[1];
    obj[key] = value;
  }
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
