const isCapitalizedWord = (word: string): boolean => {
  const wordFirstLetter = word.charAt(0);
  const capitalizedFirstLetter = word.charAt(0).toUpperCase();

  return wordFirstLetter === capitalizedFirstLetter;
}

export const convertToCamelCase = (word: string): string => {
  if (isCapitalizedWord(word)) {
    const listOfWords = word.split(/[_-\s]/);

    const capitalizedWords = [];
    listOfWords.forEach(element => {
      const firstLetter = element.charAt(0);
      const word = element.substring(1);
      capitalizedWords.push(`${firstLetter.toUpperCase()}${word}`)
    });
    return capitalizedWords.join('');
  }
  return '';
}