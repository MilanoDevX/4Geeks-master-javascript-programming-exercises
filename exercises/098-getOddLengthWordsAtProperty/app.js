// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    let newArray = [];
    if (obj[key] && typeof(obj[key]) == "object" && obj[key].length > 0) {
        newArray = obj[key];
        return newArray.filter((item) => item.length % 2 !== 0);
    } else {
        return newArray;
    }
}
let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']