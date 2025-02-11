function getSmallestElementAtProperty(obj, key) {
    // your code here
    let arr = [];
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
      arr = obj[key];
      let min = arr[0];
      for (item of arr) {
        if (item < min) {
          min = item
        }
      }
      return min;
    } else {
      return arr;
    }
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
