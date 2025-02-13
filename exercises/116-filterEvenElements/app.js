function filterEvenElements(arr) {
    // your code here
    let evenElements = arr.filter((item) => {
        if (item % 2 == 0) {
            return item;
        }
    })
    return evenElements;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
