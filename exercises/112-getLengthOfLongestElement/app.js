function getLengthOfLongestElement(arr) {
    // Your code here
    let longestElement = [];
    for (element of arr) {
        if (element.length > longestElement.length) {
            longestElement = element;
        } 
    }
    return longestElement.length;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
