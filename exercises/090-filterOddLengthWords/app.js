function filterOddLengthWords(words) {
    // your code here
    let oddWords = [];
    oddWords = words.filter((str) => str.length % 2 != 0);
    return oddWords;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
