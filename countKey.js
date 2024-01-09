//JavaScript Program to Count the Number of Keys/Properties in an Object

function countProperties(obj) {
    // Check if the argument is an object
    if (typeof obj !== 'object' || obj === null) {
      throw new Error('Input is not an object');
    }
  
    // Get all keys of the object
    const keys = Object.keys(obj);
  
    // Return the number of keys
    return keys.length;
  }
  
  // Example usage
  const sampleObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  const numberOfProperties = countProperties(sampleObject);
  console.log(`Number of properties: ${numberOfProperties}`);
  