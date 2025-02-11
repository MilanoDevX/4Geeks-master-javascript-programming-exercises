// Write your function here
function select(arr, obj) {
    let newObj = {};
    for (item1 of arr) {
        for (item2 in obj) {
            if (item2 == item1) {
                newObj[item2] = obj[item2];
            }

        }
    }
    return newObj;
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }