//Program to Find Factorial of Number Using Recursion

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Change the value of 'number' to the desired number to find its factorial
  const number = 5;
  const result = factorial(number);
  
  console.log(`The factorial of ${number} is: ${result}`);
  