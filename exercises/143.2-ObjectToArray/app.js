function listAllValues(obj) {
  // your code here
  let allValues = [];
  for (key in obj) {
    allValues.push(obj[key]);
  }
  return allValues;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
