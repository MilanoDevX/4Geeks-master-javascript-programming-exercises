function flipEveryNChars(input, n) {
    // your code here
    let aux = Math.floor(input.length/n);
    let array = input.split("");
    let subArray = [];
    let newArray = [];
    for (let i=0; i<=(aux*n); i=i+n) {
        subArray = array.slice(i,i+n);
        subArray.reverse();
        newArray = newArray.concat(subArray);
    }

    let newString = "";
    for (item of newArray) {
        newString = newString.concat(item);
    }
    return newString;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
