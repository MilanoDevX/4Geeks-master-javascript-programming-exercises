// Write your function here
function countAllCharacters(str) {
    let allCharacters = {};
    for (letter of str) {
        if (!allCharacters[letter]) {
            allCharacters[letter] = str[letter];
            allCharacters[letter] = 1;
        } else {
            allCharacters[letter] = allCharacters[letter] + 1;
        }
    }
    return allCharacters;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}