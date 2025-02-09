let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
    counter = 0;
    for (let key in obj) {
        counter = counter + 1;
    } return counter;
   
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
