//Program to Display Fibonacci Sequence Using Recursion

function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  function displayFibonacciSequence(count) {
    for (let i = 0; i < count; i++) {
      console.log(fibonacci(i));
    }
  }
  
  // Change the value of 'count' to the desired number of terms in the sequence
  const count = 10;
  console.log(`Fibonacci sequence of ${count} terms:`);
  displayFibonacciSequence(count);
  