//Program to Count the Number of Vowels in a String

function countVowels(str) {
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    let vowelCount = 0;
  
    
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  let inputString = "Hello, World!";
  let result = countVowels(inputString);
  
  console.log(`Number of vowels in '${inputString}': ${result}`);
  