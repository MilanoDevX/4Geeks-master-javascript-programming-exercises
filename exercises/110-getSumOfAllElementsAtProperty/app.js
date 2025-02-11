function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let sum = 0;
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 1) {
        let arr = obj[key];
        for (item of arr) {
            sum = sum + item;
        }
        return sum;
    } else {
        return 0;
    }
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
