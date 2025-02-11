function getOddElementsAtProperty(obj, key) {
    // your code here
    let oddElement = [];
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
      oddElement = obj[key];
      return oddElement.filter((item) => item % 2 != 0);
    } else {
      return oddElement;
    }
    
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
