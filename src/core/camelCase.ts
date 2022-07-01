export const convertToCamelCase = (value: string): string => {
  if (value.charAt(0) === value.charAt(0).toUpperCase()) {
    const valueWithoutSpaces = value.split(' ').join('');
    return valueWithoutSpaces;
  }
  return '';
}