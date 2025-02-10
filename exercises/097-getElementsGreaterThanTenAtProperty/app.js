// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    let newArray = [];
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
        newArray = obj[key];
        return newArray.filter((item) => item > 10);
    } else {
        return newArray;
    }
}
let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]