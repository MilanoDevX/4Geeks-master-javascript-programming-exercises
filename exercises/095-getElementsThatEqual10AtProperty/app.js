// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    let newArray = [];
    if (obj[key] && typeof (obj[key]) == "object" &&
        obj[key].length > 0) {
            newArray = obj[key];
            return newArray.filter((item) => item == 10);
    } else {
            return newArray;
    }
}
let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]