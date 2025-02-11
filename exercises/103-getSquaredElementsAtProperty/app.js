function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let squaredElements = [];
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
      squaredElements = obj[key];
      return squaredElements.map((item) => item * item);
    } else {
      return squaredElements;
    }
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
