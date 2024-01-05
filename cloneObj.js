//Program to Clone a JS Object

const originalObject = {
    name: 'John',
    age: 30,
    gender: 'male'
  };
  
  
  const clonedObject = { ...originalObject };
  

  console.log('Original Object:', originalObject);
  console.log('Cloned Object:', clonedObject);
  