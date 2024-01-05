//Program to Convert the First Letter of a String into UpperCase

function capitalizeFirstLetter(str) {
    // Check if the string is not empty
    if (str.length === 0) {
      return str;
    }
  
    // Capitalize the first letter and concatenate the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Example usage
  let inputString = "hello, world!";
  let result = capitalizeFirstLetter(inputString);
  
  console.log(`Original String: ${inputString}`);
  console.log(`String with First Letter Capitalized: ${result}`);
  