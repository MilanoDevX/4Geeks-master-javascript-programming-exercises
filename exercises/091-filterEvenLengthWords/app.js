function filterEvenLengthWords(words) {
    // your code here
    let evenWords = [];
    evenWords = words.filter((string) => string.length % 2 == 0);
    return evenWords;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
