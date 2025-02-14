function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length == 0) {
        return "";
    }
    let arrayOfWords = arr.filter((item) => typeof(item) == "string" && item != "");
    if (arrayOfWords.length == 0) {
        return "";
    } else {
        let longestWord = arrayOfWords[0];
        for (element of arrayOfWords) {
            if (element.length > longestWord.length) {
                longestWord = element;
            }
        }
        return longestWord;
    }
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
