//Program to Find the Factorial of a Number
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Example: Find the factorial of 5
  const number = 5;
  const result = factorial(number);
  console.log(`The factorial of ${number} is: ${result}`);
  