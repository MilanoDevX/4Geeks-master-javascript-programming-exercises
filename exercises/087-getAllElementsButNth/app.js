function getAllElementsButNth(array, n) {
    // your code here
    let arr1 = array.slice(0,n);
    let arr2 = array.slice(n+1);
    let newArray = [...arr1, ...arr2];
    return newArray;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
