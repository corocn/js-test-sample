
// 数を渡すと値が返ってくる
// 3の倍数の場合はFizzが返る
// 5の倍数の場合はBuzzが返る
// 3と5の両方の倍数の場合はFizzBuzzが返る

var chai = require('chai');
var assert = chai.assert;
var fizzbuzz = require('../fizzbuzz.js');

describe('FizzBuzz', function() {
  it('3の倍数の場合はFizzが返る', function () {
    assert.equal(fizzbuzz(3), 'Fizz');
  });

  it('5の倍数の場合はBuzzが返る', function () {
    assert.equal(fizzbuzz(5), 'Buzz');
  });

  it('3の倍数かつ5の倍数の場合はFizzBuzzが返る', function () {
    assert.equal(fizzbuzz(15), 'FizzBuzz');
  });

});

