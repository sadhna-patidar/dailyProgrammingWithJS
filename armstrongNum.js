//Program to Check Armstrong Number

function isArmstrongNumber(number) {
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;
  
    for (let digit of numString) {
      sum += Math.pow(parseInt(digit), numDigits);
    }
  
    return sum === number;
  }
  
  // Example: Check if 1634 is an Armstrong number
  const numToCheck = 1634;
  
  if (isArmstrongNumber(numToCheck)) {
    console.log(`${numToCheck} is an Armstrong number.`);
  } else {
    console.log(`${numToCheck} is not an Armstrong number.`);
  }
  