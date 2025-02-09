// Write your function here
function getIndexOf(char, string) {
    let index = 0;
    for (let i=0; i < string.length; i++) {
        if (string[i] == char) {
            index = i;
            break;
        }
        
    }
    if (index == 0) {
        return -1;
    } else {
        return index;
    }
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2