function checkAge(name, age) {
  // your code here
  if (age >= 21) {
    return "Welcome, " + name + "!";
  } else {
    return "Go home, " + name + "!";
  }
}
console.log(checkAge("Elias", 22));
