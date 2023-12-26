//Program to Convert Decimal to Binary

function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
      return '0';
    } else {
      let binary = '';
      while (decimalNumber > 0) {
        binary = (decimalNumber % 2) + binary;
        decimalNumber = Math.floor(decimalNumber / 2);
      }
      return binary;
    }
  }
  
  // Change the value of 'decimalNumber' to the desired decimal number
  const decimalNumber = 23;
  const binaryResult = decimalToBinary(decimalNumber);
  
  console.log(`Binary representation of ${decimalNumber} is: ${binaryResult}`);
  