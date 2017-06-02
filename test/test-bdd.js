var chai = require('chai');
var fizzbuzz = require('../fizzbuzz.js');
chai.should();

describe('FizzBuzz /w BDD', function () {
  var subject;

  it('3の倍数の時にFizzが返る', function () {
    subject = fizzbuzz(3);
    subject.should.equal('Fizz');
  });

  it('5の倍数の時にBuzzが返る', function () {
    subject = fizzbuzz(5);
    subject.should.equal('Buzz');
  });

  it('3の倍数かつ5の倍数の時にFizzBuzzが返る', function () {
    subject = fizzbuzz(15);
    subject.should.equal('FizzBuzz');
  });

});
