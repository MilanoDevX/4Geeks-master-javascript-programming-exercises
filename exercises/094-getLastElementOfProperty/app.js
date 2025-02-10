// Write your function here
function getLastElementOfProperty(obj, key) {
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
        let indexLastElement = obj[key].length-1
        return obj[key][indexLastElement];
    } else {
        return undefined;
    }
}
let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5