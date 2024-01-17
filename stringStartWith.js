// Function to check if a string starts with another string
function startsWith(str, prefix) {
    return str.startsWith(prefix);
}

// Example usage
let mainString = "Hello, World!";
let prefixString = "Hello";

if (startsWith(mainString, prefixString)) {
    console.log(`"${mainString}" starts with "${prefixString}".`);
} else {
    console.log(`"${mainString}" does not start with "${prefixString}".`);
}
