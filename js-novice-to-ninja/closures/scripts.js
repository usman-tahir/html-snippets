
// Closure example with "knowledge" example

// Skills learned inside the temple
function temple() {
  var weapons = "Katana, Bo, Shuriken, Yuri";
  
  function innerSanctum() {
    var stealth = "Cho Ho, Shinobi-Iri, Henso-Jutsu";
    return "Ninja skills: " + weapons + " " + stealth;
  }
  return innerSanctum();
}

var ninja = temple();
console.log(ninja);

// Basic closure example
function closure() {
  var inside = "I was created inside the function";
  return inside;
}
// Does not work since 'inside' is not defined here
// console.log(inside);

// This example works
var outside = closure();
console.log(outside);

function temperatureClosure() {
  var a = 1.8,
    b = 32;
  return function(c) {
    return c * a + b;
  }
}

var toFahrenheit = temperatureClosure();
console.log(toFahrenheit(30));

// Counter implementation with a closure
function counter(start) {
  i = start;
  return function() {
    return i += 1;
  }
}

var count = counter(1);
// console.log(count);
console.log(count());
console.log(count());

function multiplier(x) {
  return function(y) {
    return x * y;
  }
}

// Multiplies any number by two
var doubler = multiplier(2);
console.log(doubler(7)); // 14

var tripler = multiplier(3);
console.log(tripler(3)); // 9
console.log(doubler(tripler(3))); // 18

// Self contained module examples
(function() {
  "use strict";
  console.log("Hello from the first module");
}());

(function() {
  "use strict";
  console.log("Hello from the second module");
}());