function sumDigits(num) {
    // your code here
    let string = num.toString();
    let array = string.split("");
    let correctedArray = "";

    if (array[0] == "-") {
        correctedArray = array.slice(1);
        correctedArray[0] = parseInt(correctedArray[0]) * -1;
    } else {
        correctedArray = array;
    }

    let sumOfDigits = 0;
    for (element of correctedArray) {
        item = parseInt(element);
        sumOfDigits = sumOfDigits + item;
    }
    return sumOfDigits;
}

let output = sumDigits(-316);
console.log(output); // --> 4
