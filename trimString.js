// Function to trim a string
function trimString(inputString) {
    // Using trim() method to remove leading and trailing whitespaces
    return inputString.trim();
}

// Example usage
let originalString = "   Hello, World!   ";
let trimmedString = trimString(originalString);

console.log("Original String:", originalString);
console.log("Trimmed String:", trimmedString);
