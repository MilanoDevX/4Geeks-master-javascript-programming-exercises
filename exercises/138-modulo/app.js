function modulo(num1, num2) {
    // your code here
    if (num1 == 0) {
        return 0;
    }
    if (num2 == 0) {
        return NaN;
    }
    if (num1 == NaN || num2 == NaN) {
        return NaN;
    }
    let sign = 0;
    if (num1 < 0) {
        sign = -1;
    } else {
        sign = 1;
    }
    num1 = Math.abs(num1)
    let n = Math.floor(num1/num2);
    let modulo = num1 - (num2*n);
    return modulo*sign;
    }


let output = modulo(25, 4);
console.log(output); // --> 1
