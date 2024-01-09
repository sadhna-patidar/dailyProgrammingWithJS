//Program to Loop Through an Object
//for...in loop:
const myObject = {
    name: 'Sadhna',
    age : '21'
  };
  
  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      const value = myObject[key];
      console.log(`${key}: ${value}`);
    }
  }
 
  //Object.keys() method:
  const myObject1 = {
    username: 'sadhna',
    email : 'sadhna@123.com',
    password: 'sadhna123'
  };
  
  Object.keys(myObject1).forEach(key => {
    const value = myObject1[key];
    console.log(`${key}: ${value}`);
  });

  //Object.entries() method
  const myObject2 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  Object.entries(myObject2).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  
  