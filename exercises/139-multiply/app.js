function multiply(num1, num2) {
    // your code here
    if (num1 == 0 || num2 == 0) {
        return 0;
    }
    
    let multiply = 0;
    num1Abs = Math.abs(num1);
    num2Abs = Math.abs(num2);
    
    for (let i = 1; i<=num2Abs; i++) {
        multiply = multiply + num1Abs;
    }

    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
        return -multiply;
    } else {
        return multiply;
    }
}

let output = multiply(4, 7);
console.log(output); // --> 28
