// Write your function here
function computeAverageOfNumbers(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        let sum = 0
        arr.forEach(item => {
            sum = sum + item;
            return sum;
        })
        let average = sum / arr.length;
        return average;
    }
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3