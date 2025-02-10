// Write your function here
function getNthElementOfProperty(obj, key, n) {
    if (obj[key] && typeof(obj[key]) == "object" && 
        obj[key].length > 0 && n in obj[key]) {
            return obj[key][n];
    } else {
        return undefined;
    }
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2