function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let average = 0;
  if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
    let sum = 0;
    let arr = obj[key];
    for (item of arr) {
      sum = sum + item;
    }
    average = sum / arr.length
  } 
  return average;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  