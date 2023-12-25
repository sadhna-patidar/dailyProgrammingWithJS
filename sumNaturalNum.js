//Program to Find the Sum of Natural Numbers (Take input from users)

// Using the prompt function to take user input
const userInput = 10;

// Converting the user input from string to integer
const num = parseInt(userInput);

// Check if the input is a positive integer
if (isNaN(num) || num < 1) {
  console.log("Please enter a valid positive integer.");
} else {
  // Function to calculate the sum of natural numbers
  function sumOfNaturalNumbers(n) {
    return (n * (n + 1)) / 2;
  }

  // Calculate the sum and display the result
  const result = sumOfNaturalNumbers(num);
  console.log(`The sum of natural numbers up to ${num} is: ${result}`);
}
