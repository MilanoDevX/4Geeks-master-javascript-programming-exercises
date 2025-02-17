function transformFirstAndLast(array) {
  // your code here
  let key = array[0];
  let lastPosition = array.length-1;
  let value = array[lastPosition];
  let obj = {};
  obj[key] = value;
  return obj;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
