//Program to Display the Multiplication Table
function displayMultiplicationTable(number) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} * ${i} = ${number * i}`);
    }
  }
  
  // Example: Display multiplication table for 5
  displayMultiplicationTable(5);