
(function () {
  "use strict";
  
  function random(a, b) {
    if (b === undefined) {
      b = a,
        a = 1;
    }
    return Math.floor((b - a + 1) * Math.random()) + a;
  }
  
  function reverse(string) {
    var array = string.split("");
    array.reverse();
    return array.join("");
  }
  
  function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
      square.cache[x] = x * x;
    }
    return square.cache[x];
  }
  
  function hypotenuse(a, b) {
    var total = square(a) + square(b);
    return Math.sqrt(total);
  }
  
  function sum(array, callback) {
    if (typeof callback === "function") {
      array = array.map(callback);
    }
    return array.reduce(function(a, b) { return a + b; });
  }
  
  function mean(array) {
    return sum(array) / array.length;
  }
  
  function standardDeviation(array) {
    return (sum(array, square)) / (array.length - square(mean(array)));
  }
  
  function power(x) {
    return function(power) {
      return Math.pow(x, power);
    }
  }
  
  function sayHi() {
    return "Hi " + this.name + "!";
  }
  
  // Adding a description to a function
  square.description = "Squares a number that is provided as an argument";
  
  console.log(random(6));
  console.log(random(10, 20));
  
  // The function does not change the actual value of the argument string
  var message = "hello";
  console.log(reverse(message));
  console.log(message);
  
  console.log(hypotenuse(3, 4));
  
  console.log(sum([1, 2, 3]));
  console.log(sum([1, 2, 3], square));
  console.log(square.description);
  
  var powerOfTwo = power(2);
  console.log(powerOfTwo(5));
  
  var powerOfTen = power(10);
  console.log(powerOfTen(6));
  
  var personOne = {name: "James"};
  var personTwo = {name: "Sarah"};
  console.log(sayHi.call(personOne));
  console.log(sayHi.call(personTwo));
  
  console.log("Current square cache: " + JSON.stringify(square.cache));
}());