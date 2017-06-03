var chai = require('chai');
var assert = chai.assert;
var fizzbuzz = require('../fizzbuzz');

describe('FizzBuzzのテスト', function() {
  it('3の倍数のときに、Fizzが返ってくる', function() {
    assert.equal(fizzbuzz(3), 'Fizz');
  });

  it('5の倍数のときに、Buzzが返ってくる', function() {
    assert.equal(fizzbuzz(5), 'Buzz');
  });

  it('3の倍数かつ5の倍数のとき、FizzBuzzが返ってくる', function() {
    assert.equal(fizzbuzz(15), 'FizzBuzz');
  })

  it('条件に当てはまらず値がそのまま返る', function() {
    assert.equal(fizzbuzz(2), 2);
  })
});
