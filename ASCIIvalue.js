// Function to find ASCII value of a character
function findASCII(character) {
    // Using charCodeAt to get the ASCII value
    var asciiValue = character.charCodeAt(0);

    // Displaying the result
    console.log("ASCII value of '" + character + "' is: " + asciiValue);
}

// Example: Find ASCII value of the character 'A'
findASCII('A');
