// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3) {
    let maxWord = Math.max(word1.length, word2.length, word3.length);
    return maxWord;
}

let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3