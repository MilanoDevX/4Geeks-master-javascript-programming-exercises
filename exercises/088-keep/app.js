// Write your function here
function keep(arr, element) {
    // Option 1
    // for (item of arr) {
    //     if (item == element) {
    //         newArr = [...newArr, item];
    //     }
    // }

    // Option 2
    let newArr = arr.filter((item) => {
        if (item == element) {
            return item;
        }
    });

    return newArr;
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]
