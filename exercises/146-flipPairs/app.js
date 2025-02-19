function flipPairs(input) {
    // your code here
    let newString = "";
    if (input.length % 2 == 0) {
        for (let i=0; i<input.length; i=i+2) {
            newString = newString.concat(input[i+1]);
            newString = newString.concat(input[i]);
        }
    } else {
        for (let i=0; i<input.length-2; i=i+2) {
            newString = newString.concat(input[i+1]);
            newString = newString.concat(input[i]);
        }
        newString = newString.concat(input[input.length-1]);
    }
    return newString;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
