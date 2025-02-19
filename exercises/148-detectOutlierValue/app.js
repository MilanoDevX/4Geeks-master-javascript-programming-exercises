function detectOutlierValue(string) {
    // your code here
    let outlier = 0;
    let indexOdd = 0;
    let indexEven = 0;
    let counterOdd = 0;
    let counterEven=0;
    let newString = string.split(" ");
    let arrayOfNumbers = [];
    for (item of newString) {
        item = parseInt(item);
        arrayOfNumbers.push(item);
    }
    for (index in arrayOfNumbers) {
        if (arrayOfNumbers[index] % 2 == 0 || arrayOfNumbers[index] == 0) {
            counterEven = counterEven + 1;
            indexEven = index;
        } else {
            counterOdd = counterOdd + 1;
            indexOdd = index;
        }
    }
    if (counterEven == 1) {
        outlier = parseInt(indexEven) + 1;
    } else {
        outlier = parseInt(indexOdd) + 1;
    }
    return outlier;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
