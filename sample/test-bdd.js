var chai = require('chai');
var expect = chai.expect;
var fizzbuzz = require('./f.js');


describe('FizzBuzz /w BDD', function () {

  it('3の倍数の時にFizzが返る', function () {
    expect(fizzbuzz(3)).to.equal('Fizz');
  });

  it('5の倍数の時にBuzzが返る', function () {
    expect(fizzbuzz(5)).equal('Buzz');
  });

  it('3の倍数かつ5の倍数の時にFizzBuzzが返る', function () {
    expect(fizzbuzz(15)).to.equal('FizzBuzz');
  });

  it('値がそのまま返る', function() {
    expect(fizzbuzz(2)).to.equal(2);
  });

});
