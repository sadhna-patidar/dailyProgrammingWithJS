// Program to Check if a Key Exists in an Object

// Sample object
const myObject = {
    name: 'John',
    age: 30,
    gender: 'male'
  };
  
  // Check if the key 'age' exists in the object
  const keyExists = myObject['age'] !== undefined;
  
  // Display the result
  console.log(`Does the key 'age' exist in the object? ${keyExists}`);
  