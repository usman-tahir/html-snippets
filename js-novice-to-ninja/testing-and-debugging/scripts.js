
(function () {
  "use strict";
  
  function amIOldEnough(age) {
    console.log(age);
    console.trace(age);
    if (age < 12) {
      console.log("No, sorry.");
      return "No, sorry.";
    } else if (age < 18) {
      console.log("Only if you are accompanied by an adult.");
      return "Only if you are accompanied by an adult.";
    } else {
      console.log("Yep, come on in!");
      return "Yep, come on in!";
    }
  }
  
  function squareRoot(number) {
    if (number < 0) {
      throw new Error("You can't take the square root of negative numbers.");
    }
    return Math.sqrt(number);
  }
  
  function imaginarySquareRoot(number) {
    try {
      var answer = String(squareRoot(number));
    } catch (error) {
      answer = squareRoot(-number) + "i";
    } finally {
      return "+/- " + answer;
    }
  }
  
  // amIOldEnough(17);
  console.log(imaginarySquareRoot(-49));
}());