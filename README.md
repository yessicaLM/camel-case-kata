# Camel Case Kata


## Description
Camel Case kata implements a function thar given a sequence of words separated
by empty spaces or '-' or '_' converts each word into a capitalized word and
returns in a single word the combination of those capitalized words.


## Cases

- **"[empty string]"** -> "[empty string]"  
- **'Foo'** -> 'Foo'
- **'Foo Bar'** -> 'FooBar'
- **'Foo_Bar-Foo'** -> 'FooBarFoo'
- **'foo'** -> 'Foo'
- **'Foo__bar foo-bar'** -> 'FooBarFooBar'
- **'   _fooBar foo'** --> 'FooBarFoo'

## Run test
To run all test in watch mode, run next command:

`
npm run test:watch
`


