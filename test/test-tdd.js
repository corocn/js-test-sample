var chai = require('chai');
var assert = chai.assert;
var fizzbuzz = require('../fizzbuzz.js');

describe('FizzBuzz /w TDD', function() {
  it('3の倍数の時にFizzが返る', function() {
    assert.equal(fizzbuzz(3), 'Fizz');
  })

  it('5の倍数の時にBuzzが返る', function() {
    assert.equal(fizzbuzz(5), 'Buzz');
  })

  it('3の倍数かつ5の倍数の時にFizzBuzzが返る', function() {
    assert.equal(fizzbuzz(15), 'FizzBuzz');
  })
});
