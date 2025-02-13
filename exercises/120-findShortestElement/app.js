function findShortestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return "";
    } else {
        let shortestElement = arr[0];
        for (element of arr) {
            if (element.length < shortestElement.length) {
                shortestElement = element;
            }
        }
        return shortestElement
    }
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'