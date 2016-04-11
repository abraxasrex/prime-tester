var expect = chai.expect;
var should = chai.should();

describe('is prime tests', function() {

  it('should always return a boolean', function() {
    expect(isPrime(2)).to.be.a('boolean');
  });

  it('calling isPrime(5) should return true', function() {
    expect(isPrime(5)).to.be.true;
  });

  it('calling isPrime(12) should return false', function() {
    expect(isPrime(12)).to.be.false;
  });

});
