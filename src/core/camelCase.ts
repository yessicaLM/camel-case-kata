export const convertToCamelCase = (value: string): string => {
  if (value.charAt(0) === value.charAt(0).toUpperCase()) {
    const valueWithoutSpaces = value.split(' ').join('');
    const removedSymbols = valueWithoutSpaces.split(/[_-]/).join('');
    return removedSymbols;
  }
  return '';
}