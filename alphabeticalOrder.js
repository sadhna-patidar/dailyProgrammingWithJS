function sortWordsAlphabetically(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(/\s+/);

    // Sort the array of words in alphabetical order
    const sortedWords = words.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

     Join the sorted words back into a sentence
    const sortedSentence = sortedWords.join(' ');

    return sortedSentence;
}

// Example usage
const inputSentence = "This is an example sentence for sorting words.";
const sortedSentence = sortWordsAlphabetically(inputSentence);

console.log("Original sentence:", inputSentence);
console.log("Sorted sentence:", sortedSentence);
