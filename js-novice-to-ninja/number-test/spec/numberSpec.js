
var int,
  negative,
  decimal;

beforeEach(function () {
  int = Math.floor(100 * Math.random());
  negative = (int * -1);
  decimal = Math.floor(negative) + 0.5;
});

describe("The factorsOf() function", function() {
  // Exception for negative inputs
  it("should throw an exception for negative numbers", function() {
    expect(function() {
      factorsOf(negative)
    }).toThrow();
  });
  
  // Exception for non-integer inputs
  it("should throw an exception for non-integer numbers", function() {
    expect(function() {
      factorsOf(decimal);
    }).toThrow();
  });
  
  // Negative numbers should not be prime
  it("should say a negative number is not prime", function() {
    expect(isPrime(negative)).toEqual(false);
  });
  
  it("should find the factors of 12", function() {
    expect(factorsOf(12)).toEqual([1, 2, 3, 4, 6, 12]);
  });
  
  it("should return an empty list of factors for n = 0", function () {
    expect(factorsOf(0)).toEqual([]);
  });
});

describe("The isPrime() function", function () {
  it("should return true for the number 2", function() {
    expect(isPrime(2)).toEqual(true);
  });
  
  it("should return false for the number 10", function () {
    expect(isPrime(10)).not.toEqual(true);
  });
});