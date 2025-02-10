function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let newArray = [];
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
      newArray = obj[key];
      return newArray.filter((item) => item.length % 2 == 0);
    } else {
      return newArray;
    }
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
