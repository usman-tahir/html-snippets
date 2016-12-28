
function factorsOf(n) {
  "use strict";
  
  if (n < 0) {
    throw new RangeError("Argument Error: Number must be positive.");
  }
  
  if (Math.floor(n) !== n) {
    throw new RangeError("Argument Error: Number must be an integer.");
  }
  
  var factors = [],
    max = Math.sqrt(n),
    i;
  for (i = 1; i <= max; i += 1) {
    if (n % i === 0) {
      factors.push(i, n / i);
    }
  }
  return factors.sort(function (a, b) {
    return a > b;
  });
}

function isPrime(n) {
  "use strict";
  var result;
  
  try {
    result = factorsOf(n).length == 2;
  } catch(exception) {
    result = false;
  } finally {
    return result;
  }
}