//program to find sum of natural number of using recursion function

function sumOfNaturalNumbers(n) {
    if (n === 0) {
      return 0; // Base case: sum of 0 natural numbers is 0
    } else {
      return n + sumOfNaturalNumbers(n - 1); // Recursive case: add n to the sum of (n-1) natural numbers
    }
  }
  
  // Example: Find the sum of natural numbers up to 5
  const limit = 5;
  const result = sumOfNaturalNumbers(limit);
  
  console.log(`The sum of natural numbers up to ${limit} is: ${result}`);
  