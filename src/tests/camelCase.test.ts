import { convertToCamelCase } from '../core/camelCase';

// "" -> ""
// 'Foo' -> 'Foo'
// 'Foo Bar' -> 'FooBar'
// 'Foo_Bar-Foo' -> 'FooBarFoo'
// 'foo' -> 'Foo'
// 'Foo__bar foo-bar' -> 'FooBarFooBar'

describe('Camel case', () => {
  it('empty strings are allowed', () => {
    expect(convertToCamelCase('')).toBe('');
  });
});
