let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = "";
  // your code here
	if (firstName in customerData) {
      if (customerData[firstName].visits == 1) {
        greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!";
      }
      if (customerData[firstName].visits > 1) {
        greeting = "Welcome back, " + firstName + "! So glad to see you again!";
      }

  } else {
    greeting = "Welcome! Is this your first time?";
  }
  return greeting;
}

console.log(greetCustomer('Joe')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
