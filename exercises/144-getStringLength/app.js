function getStringLength(string) {
    // your code here
    let stringLength = 0;
    for (character of string) {
        if (typeof(character) == "string") {
            stringLength = stringLength + 1;
        }
    }
    return stringLength;
}

let output = getStringLength('hello');
console.log(output); // --> 5
