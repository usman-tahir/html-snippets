
var a = 1,
  b = 2;

function local_a() {
  var a = 3;
  console.log("'a' inside function: " + a);
}

local_a();
console.log("'a' outside function: " + a);


// Overwrites the global variable
function local_b() {
  b = 2;
  console.log("'b' inside function: " + b);
}

console.log("'b' outside function: " + b);

// Creates a new local variable
function local_c() {
  c = 5;
  console.log("'c' inside function: " + c);
}

local_c(); // Invoke the function

console.log("'c' outside function: " + c);

function local_d() {
  var d = 6; // Creates a new local variable
  console.log("'d' inside function: " + d);
}

// Invoke the function
d = local_d() || "'d' is not defined.";

console.log("'d' outside function: " + d);

/*
  Examples of hoisting
*/
console.log(e); // Undefined

// Other code here

var e = "Hoist me!";
console.log(e); // Now 'a' is a string

// Hoisting a function and getting a result
add(2, 3);

function add(x, y) {
  console.log(x + y);
}