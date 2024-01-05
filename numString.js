//Check the Number of Occurrences of a Character in the String
function countOccurrences(str, char) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    
    return count;
  }
  
  // Example usage
  let inputString = "Hello, World!";
  let characterToCount = "l";
  let result = countOccurrences(inputString, characterToCount);
  
  console.log(`Number of occurrences of '${characterToCount}' in '${inputString}': ${result}`);
  