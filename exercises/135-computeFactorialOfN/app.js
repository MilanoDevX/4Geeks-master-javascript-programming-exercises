function computeFactorialOfN(n) {
    // your code here
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
