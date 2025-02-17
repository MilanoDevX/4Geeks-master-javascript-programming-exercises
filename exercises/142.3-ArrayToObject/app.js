function transformEmployeeData(array) {
  // your code here
  let newArray = [];
  let key = 0;
  let value = 0;
  for (let i=0; i<array.length; i++) {
    let obj = {};
    for (let j=0; j<array[i].length; j++) {
      key = array[i][j][0];
      value = array[i][j][1];
      obj[key] = value;
    }
    newArray[i] = obj;
    
  }
  return newArray;
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]