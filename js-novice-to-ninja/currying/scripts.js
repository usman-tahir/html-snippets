
function multiplier(x, y) {
  if (y === undefined) {
    return function(z) {
      return x * z;
    }
  } else {
    return x * y;
  }
}

console.log(multiplier(3, 5));

// "Currying" the function to return the nested function
quadrupler = multiplier(4);

console.log(quadrupler(5));
console.log(multiplier(3)(3)); // 9

// A general curry function
function curry(func) {
  var fixedArguments = [].slice.call(arguments, 1);
  return function() {
    var arguments = fixedArguments.concat([].slice.call(arguments));
    return func.apply(null, arguments);
  }
}

function divider(x, y) {
  return x / y;
}

var reciprocal = curry(divider, 1);
console.log(reciprocal(2));