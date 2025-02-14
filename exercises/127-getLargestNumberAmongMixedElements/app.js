function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0) {
        return 0;
    }
    let arrayOfNumbers = arr.filter((item) => typeof(item) == "number");
    if (arrayOfNumbers.length == 0) {
        return 0;
    } else {
        let largestNumber = arrayOfNumbers[0];
        for (element of arrayOfNumbers) {
            if (element > largestNumber) {
                largestNumber = element;
            }
        }
        return largestNumber;
    }
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
