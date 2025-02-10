// Write your function here
function removeElement(arr, element) {
    // return arr.filter((item) => {
    //     if (item !== element) {
    //         return item;
    //     }
    // });

    return arr.filter((n) => n !== element);
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]