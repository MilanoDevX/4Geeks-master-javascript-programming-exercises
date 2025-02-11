function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let arr = [];
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
      arr = obj[key];
      let indexLastElement = arr.length-1
      return arr.slice(0, indexLastElement);
    } else {
      return arr;
    }
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
