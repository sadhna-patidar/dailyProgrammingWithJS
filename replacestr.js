// Function to replace all occurrences of a substring in a string
function replaceAllOccurrences(mainString, search, replacement) {
    const regex = new RegExp(search, 'g');
    return mainString.replace(regex, replacement);
}

// Example usage
const originalString = "Hello world, world!";
const searchString = "world";
const replacementString = "Universe";

const modifiedString = replaceAllOccurrences(originalString, searchString, replacementString);

console.log(`Original string: ${originalString}`);
console.log(`Modified string: ${modifiedString}`);
