function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0) {
        return "";
    }
    let arrayOfWords = arr.filter((item) => (typeof (item) == "string" && item != ""));
    if (arrayOfWords.length == 0) {
        return "";
    } else {
        let shortestWord = arrayOfWords[0];
        for (element of arrayOfWords) {
            if (element.length < shortestWord.length) {
                shortestWord = element;
            }
        }
        return shortestWord;
    }
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
