// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    let newArray = [];
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
        newArray = obj[key];
        return newArray.filter((item) => item < 100)
    } else {
        return newArray;
    }
}
let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]
