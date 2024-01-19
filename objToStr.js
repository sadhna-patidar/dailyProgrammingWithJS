// JavaScript Program to Convert Objects to Strings
const sampleObject = {
    name: 'John',
    age: 25,
    city: 'New York'
};

// Convert object to string using JSON.stringify
const jsonString = JSON.stringify(sampleObject);

// Display the result
console.log("Object as a string:", jsonString);


// Convert the string back to an object using JSON.parse
const parsedObject = JSON.parse(jsonString);

// Display the result
console.log("String as an object:", parsedObject);

