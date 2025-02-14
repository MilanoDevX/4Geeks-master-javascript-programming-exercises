function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let salesTax = preTaxAndTipAmount * 9.5 / 100;
    let tip = preTaxAndTipAmount * 15 / 100;
    let billTotal = preTaxAndTipAmount + salesTax + tip;
    return billTotal;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
