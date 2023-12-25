//Program to Find the Factors of a Number


function findFactors(number) {
    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
  
  // Example: Find the factors of 24
  const numToFindFactors = 24;
  const factorsResult = findFactors(numToFindFactors);
  
  console.log(`The factors of ${numToFindFactors} are: ${factorsResult.join(', ')}`);
  