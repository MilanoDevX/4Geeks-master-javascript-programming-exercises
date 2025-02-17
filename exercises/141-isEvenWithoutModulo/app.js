function isEvenWithoutModulo(num) {
    // your code here
    if (num == 0) {
        return true;
    }
    let roundedNumber = Math.floor(num/2);
    if (roundedNumber*2 == num) {
        return true;
    } else {
        return false;
    }
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
