//Program to Find LCM

// Function to find the Greatest Common Divisor (GCD) using Euclidean Algorithm
function findGCD(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // Function to find the Least Common Multiple (LCM) of two numbers
  function findLCM(num1, num2) {
    // LCM * GCD = |num1 * num2|
    const gcd = findGCD(num1, num2);
    const lcm = Math.abs((num1 * num2) / gcd);
    return lcm;
  }
  
  // Example: Find the LCM of 12 and 18
  const number1 = 12;
  const number2 = 18;
  
  const lcmResult = findLCM(number1, number2);
  
  console.log(`The LCM of ${number1} and ${number2} is: ${lcmResult}`);
  