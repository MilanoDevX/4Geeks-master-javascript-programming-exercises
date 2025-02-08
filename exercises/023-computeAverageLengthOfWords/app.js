// Write your function here
function computeAverageLengthOfWords(word1, word2) {
    let length1 = word1.length;
    let length2 = word2.length;
    let average = (length1 + length2) / 2;
    return average;
}
console.log(computeAverageLengthOfWords("code", "programs"));