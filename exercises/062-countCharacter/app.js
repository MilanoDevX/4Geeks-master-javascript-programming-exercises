function countCharacter(str, char) {
    // your code here
    let character = 0;
    for (let item of str) {
        if (item == char) {
            character = character + 1;
        }
    }
    return character;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
