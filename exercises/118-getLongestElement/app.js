function getLongestElement(arr) {
    // your code here
    let longestElement = "";
    for (element of arr) {
        if (element.length > longestElement.length) {
            longestElement = element;
        }
    }
    return longestElement;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
