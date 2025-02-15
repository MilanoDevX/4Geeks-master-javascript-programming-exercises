function isOddWithoutModulo(num) {
    // your code here
    let division = Math.floor(num / 2);
    if ((num - (division * 2)) != 0) {
        return true;
    } else {
        return false;
    }
}



let output = isOddWithoutModulo(17);
console.log(output); // --> true
