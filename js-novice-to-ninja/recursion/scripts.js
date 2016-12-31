
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    console.log("Currently calling factorial(" + (n - 1) + ")");
    return n * factorial(n - 1);
  }
}

function collatz(n, sequence) {
  var sequence = sequence || [n];
  if (n % 2 === 0) {
    m = n / 2;
  } else {
    m = 3 * n + 1;
  }
  sequence.push(m);
  if (m === 1) {
    return "This sequence took " + sequence.length + " steps. The sequence was: " + sequence;
  } else {
    return collatz(m, sequence);
  }
}

console.log(factorial(10));
console.log(collatz(18));