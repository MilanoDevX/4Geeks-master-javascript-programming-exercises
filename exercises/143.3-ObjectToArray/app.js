function convertObjectToList(obj) {
  // your code here
  let array = [];
  for (key in obj) {
    let subArray = [];
    subArray.push(key);
    subArray.push(obj[key]);
    array.push(subArray);
  } 
  return array;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
