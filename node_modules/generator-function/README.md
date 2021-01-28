# generator-function

Expose the ES2015 `GeneratorFunction` constructor.

[![Build Status](https://img.shields.io/travis/TimothyGu/generator-function/master.svg)](https://travis-ci.org/TimothyGu/generator-function)
[![Dependency Status](https://img.shields.io/david/TimothyGu/generator-function.svg)](https://david-dm.org/TimothyGu/generator-function)
[![devDependency Status](https://img.shields.io/david/dev/TimothyGu/generator-function.svg)](https://david-dm.org/TimothyGu/generator-function#info=devDependencies)
[![npm version](https://img.shields.io/npm/v/generator-function.svg)](https://www.npmjs.org/package/generator-function)

## Installation

    npm install generator-function

## Description

Like `Function`s, one could create generator functions from a JavaScript string
through a special constructor called `GeneratorFunction`. However, the
constructor function is [not available as a global][mdn], so one has to use the
`constructor` property of an existing generator function.

This module makes it easy to do so, and falls back gracefully when a runtime
not supporting generator functions is encountered.

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction#Summary


## Usage

On a platform supporting generator functions:

```js
var GeneratorFunction = require('generator-function')

var generatorFunction = new GeneratorFunction('arg1', 'yield arg1')
var generator = generatorFunction(1)

generator.next()
//=> { value: 1, done: false }
generator.next()
//=> { value: undefined, done: true }
```

On a runtime that does not support them:

```js
var GeneratorFunction = require('generator-function')

GeneratorFunction
// => undefined
```

## License

MIT
