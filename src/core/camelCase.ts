export const convertToCamelCase = (value: string): string => {
  if (value.charAt(0) === value.charAt(0).toUpperCase()) {
    const removedSymbols = value.split(/[_-\s]/);

    const capitalizedWords = [];
    removedSymbols.forEach(element => {
      const firstLetter = element.charAt(0);
      const word = element.substring(1);
      capitalizedWords.push(`${firstLetter.toUpperCase()}${word}`)
    });
    return capitalizedWords.join('');
  }
  return '';
}