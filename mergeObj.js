//JavaScript Program to Merge Property of Two Objects

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  // Example usage:
  const object1 = { name: 'John', age: 25 };
  const object2 = { city: 'New York', profession: 'Engineer' };
  
  const mergedObject = mergeObjects(object1, object2);
  console.log(mergedObject);
  