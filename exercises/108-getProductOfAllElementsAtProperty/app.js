function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let product = 1;
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
      arr = obj[key];
      for (item of arr) {
        product = product * item;
      }
      return product;
    } else {
      return 0;
    }
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
