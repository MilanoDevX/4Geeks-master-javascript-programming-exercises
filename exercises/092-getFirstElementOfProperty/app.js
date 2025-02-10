// Write your function here
function getFirstElementOfProperty(obj, key) {
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
        return obj[key][0];
    } else {
        return undefined;
    }
}

let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1