
function pizza(topping, callback) {
  console.log("This is a " + topping + " pizza.");
  callback();
}

function cook() {
  console.log("The pizza is cooking!");
}

function eat() {
  console.log("I've eaten the pizza!");
}

// First callback method 'cook'
pizza("Pepperoni", cook);

// Second callback with 'eat'
pizza("Chicken", eat);

// Function call with an anonymous callback
pizza("Vegetarian", function() {
  console.log("This pizza has been delivered.");
});

// Using callbacks to sort an array of numbers
var numbers = [4, 1, 3, 2, 5];
console.log(numbers);

function compareNumbers(a, b) {
  /*
    Subtracts the two numbers being compared, and gives a result that is either:
      * Negative: b is bigger than a
      * Zero: a and b are the same value
      * Positive: a is bigger than b
  */
  return a - b;
}

numbers.sort(compareNumbers);
console.log(numbers);

// Using callbacks to create an optimized mean (average) function
function mean(values, callback) {
  var total = 0,
    max = values.length,
    i;
  for (i = 0; i < max; i += 1) {
    if (typeof callback === 'function') {
      total += callback(values[i]);
    } else {
      total += values[i];
    }
  }
  return total / max;
}

// Calculates just the mean
console.log(mean([1, 2, 3]));

// Calculate the mean after doubling each number
console.log(mean([1, 2, 3], function (x) {
  return 2 * x;
}));

// Calculate the mean after squaring each number
function square(x) {
  return x * x;
}

console.log(mean([1, 2, 3], square));

// Callbacks and for each array iteration
var colors = ["red", "green", "blue", "yellow"];
colors.forEach(function(color, index) {
  console.log("Color at position " + index + " is " + color);
});

// Using the map function to 'map' a function call onto array elements
console.log([1, 2, 3].map(square));

// Using the reduce function to 'reduce' an array of elements into one value
console.log([1, 2, 3, 4, 5].reduce(function(previous, current) {
  return previous + current;
}));

// Calculating the average word length in a sentence
var sentence = "The quick brown fox jumped over the lazy dog",
  words = sentence.split(" "),
  total;

total = words.reduce(function(previous, word) {
  return previous + word.length;
}, 0);

console.log("Average word length: " + total / words.length);

// Using map and reduce together to square and then add the resulting elements
console.log([1, 2, 3].map(square).reduce(function(x, total) { return x + total}));

// Take an array of sales orders, add the sales tax, and then return the total
var salesTotals = [112.45, 32.99, 45.52],
  totalAfterSalesTax = 0.00;

totalAfterSalesTax = salesTotals.map(function(amount) {
  return amount * 1.06;
}).reduce(function(previous, current) {
  return previous + current;
});
console.log("Total sales after 6% tax: $" + totalAfterSalesTax);

// Using filter to 'filter' out elements from an array

var words = ["apple", "banana", "cantaloupe"],
  filteredWords = words.filter(function(word) { return word.length >= 6});
console.log(filteredWords);

