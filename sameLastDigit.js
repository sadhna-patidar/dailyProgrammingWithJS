// Function to check if five numbers have the same last digit
function haveSameLastDigit(num1, num2, num3, num4, num5) {
    const lastDigit1 = Math.abs(num1 % 10); // Get the last digit of num1
    const lastDigit2 = Math.abs(num2 % 10); // Get the last digit of num2
    const lastDigit3 = Math.abs(num3 % 10); // Get the last digit of num3
    const lastDigit4 = Math.abs(num4 % 10); // Get the last digit of num4
    const lastDigit5 = Math.abs(num5 % 10); // Get the last digit of num5
    
    return (
      lastDigit1 === lastDigit2 &&
      lastDigit1 === lastDigit3 &&
      lastDigit1 === lastDigit4 &&
      lastDigit1 === lastDigit5
    );
  }
  
  // Example: Check if 123, 53, 43, 333, and 1234 have the same last digit
  const num1 = 123;
  const num2 = 53;
  const num3 = 43;
  const num4 = 333;
  const num5 = 1234;
  
  
  if (haveSameLastDigit(num1, num2, num3, num4, num5)) {
    console.log(`The last digit of all numbers is the same.`);
  } else {
    console.log(`The last digit of at least two numbers is different.`);
  }
  