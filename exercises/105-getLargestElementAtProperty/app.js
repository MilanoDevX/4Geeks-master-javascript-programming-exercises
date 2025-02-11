function getLargestElementAtProperty(obj, key) {
    // your code here
    let arr = [];
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
      arr = obj[key];
      let max = arr[0];
      for (item of arr) {
        if (item > max) {
          max = item;
        }
      }
      return max;
    } else {
      return arr;
    }
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
