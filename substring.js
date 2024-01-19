// Function to check if a string contains a substring
function containsSubstring(mainString, subString) {
    return mainString.includes(subString);
}

// Example usage
const mainString = "Hello, world!";
const subString = "world";

if (containsSubstring(mainString, subString)) {
    console.log(`"${mainString}" contains the substring "${subString}".`);
} else {
    console.log(`"${mainString}" does not contain the substring "${subString}".`);
}
