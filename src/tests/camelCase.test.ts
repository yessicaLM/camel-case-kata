import { convertToCamelCase } from '../core/camelCase';

describe('Camel case', () => {
  it('empty strings are allowed', () => {
    const expected = '';
    const currentValue = '';

    expect(convertToCamelCase(currentValue)).toBe(expected);
  });

  it('capitalize single word returns same word without changes', () => {
    const expected = 'Foo';
    const currentValue = 'Foo';

    expect(convertToCamelCase(currentValue)).toBe(expected);
  });

  it('two capitalized word separated by empty space return FooBar', () => {
    const expected = 'FooBar';
    const currentValue = 'Foo Bar';

    expect(convertToCamelCase(currentValue)).toBe(expected);
  });

  it('_ and - are removed from separated words', () => {
    const expected = 'FooBarFoo';
    const currentValue = 'Foo_Bar-Foo';

    expect(convertToCamelCase(currentValue)).toBe(expected);
  });

  it('sequence with empty spaces and symbols returns capitalized words', () => {
    let expected = 'FooBarFooBar';
    let currentValue = 'Foo__bar foo-bar';

    expect(convertToCamelCase(currentValue)).toBe(expected);

    expected = 'FooBarFoo';
    currentValue = '   _fooBar foo';

    expect(convertToCamelCase(currentValue)).toBe(expected);
  });
});
