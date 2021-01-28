'use strict'

var assert = require('assert')
var test = require('testit')
var GeneratorFunction = require('./')

if (GeneratorFunction) {
  test('works', function () {
    var generatorFunction = new GeneratorFunction('arg1, arg2',
      'var input = arg1 * (yield Math.round(Math.random() * 10000))\n' +
      'var output = yield (input * arg2)\n'  +
      'return output'
    )
    var generator = generatorFunction(3, 10)
    var random = generator.next().value;
    var output = generator.next(random * 2).value
    assert.strictEqual(output, random * 60)
    assert.strictEqual(generator.next(output).value, random * 60)
  })
} else {
  test('generator functions really do not work', function () {
    assert.throws(function () {
      eval('(function* () {})()')
    })
  })
}
