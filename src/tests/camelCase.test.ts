import { convertToCamelCase } from '../core/camelCase';

// "" -> "" --> DONE
// 'Foo' -> 'Foo' --> DONE
// 'Foo Bar' -> 'FooBar'
// 'Foo_Bar-Foo' -> 'FooBarFoo'
// 'foo' -> 'Foo'
// 'Foo__bar foo-bar' -> 'FooBarFooBar'

describe('Camel case', () => {
  it('empty strings are allowed', () => {
    expect(convertToCamelCase('')).toBe('');
  });

  it('capitalize single word returns same word without changes', () => {
    expect(convertToCamelCase('Foo')).toBe('Foo');
  });

  it('two capitalized word separated by empty space return FooBar', () => {
    expect(convertToCamelCase('Foo Bar')).toBe('FooBar');
  });
});
