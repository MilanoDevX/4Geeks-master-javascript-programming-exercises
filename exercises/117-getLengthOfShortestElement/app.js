function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return 0;
    } else {
        let shortestElement = arr[0];
        for (element of arr) {
            if (element.length < shortestElement.length) {
                shortestElement = element;
            }
        }
        return shortestElement.length;
    }
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
