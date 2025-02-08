function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let totalLength = word1.length + word2.length + word3.length;
  return totalLength;
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
