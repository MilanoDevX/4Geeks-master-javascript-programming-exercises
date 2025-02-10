function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let shortestWord = "";
    if (word1.length <= word2.length && word1.length <= word3.length) {
        shortestWord = word1;
    }
    if (word2.length < word1.length && word2.length <= word3.length) {
        shortestWord = word2;
    }
    if (word3.length < word1.length && word3.length < word1.length) {
        shortestWord = word3;
    }
    return shortestWord;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
