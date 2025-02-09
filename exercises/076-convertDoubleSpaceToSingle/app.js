function convertDoubleSpaceToSingle(str) {
    // your code here
    let arr = str.split("  ");
    str = arr.join(" ");
    return str;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
