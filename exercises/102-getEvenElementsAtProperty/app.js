function getEvenElementsAtProperty(obj, key) {
    // your code here
    let evenElements = [];
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
      evenElements = obj[key];
      return evenElements.filter((item) => item % 2 == 0);
    } else {
      return evenElements;
    }
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
