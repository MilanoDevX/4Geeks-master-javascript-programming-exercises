function findSmallestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return 0;
    } else {
        let smallestElement = arr[0];
        for (element of arr) {
            if (element < smallestElement) {
                smallestElement = element;
            }
        }
        return smallestElement;
    }
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1