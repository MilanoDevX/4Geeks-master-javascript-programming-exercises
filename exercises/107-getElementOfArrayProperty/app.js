function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (obj[key] && typeof(obj[key]) == "object" && 
        obj[key].length > 0 && index in obj[key]) {
            return obj[key][index];
    } else {
        return undefined
    }
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
