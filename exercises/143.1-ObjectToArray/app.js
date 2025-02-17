function getAllKeys(obj) {
  // your code here
  let allKeys = [];
  for (item in obj) {
    allKeys.push(item);
  }
  return allKeys;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
