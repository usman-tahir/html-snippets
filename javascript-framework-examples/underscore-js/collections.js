// underscorejs examples for Collections
(function () {
  "use strict";
  
  // each
  _.each([1, 2, 3, 4, 5], console.log);
  
  // map
  function double(number) {
    console.log(number * number);
    return (number * number);
  }
  
  _.map([1, 2, 3, 4, 5], double);
  
  // reduce
  function sum(memo, num) {
    return memo + num;
  }
  
  console.log("sum:", _.reduce([1, 2, 3, 4, 5], sum, 0));
  
  // reduceRight
  function listConcat(a, b) {
    return a.concat(b);
  }
  
  console.log("right-reduced list:", _.reduceRight([[0, 1], [2, 3], [4, 5]], listConcat, []));
  
  // find
  function isEven(number) {
    return (number % 2 === 0);
  }
  
  console.log("first even found:", _.find([1, 2, 3, 4, 5, 6], isEven));
  
  // filter
  console.log("filtered evens:", _.filter([1, 2, 3, 4, 5, 6], isEven, []));
  
  // where (simple example)
  console.log("where:", _.where([{"one": 1}, {"two": 2}, {"three": 3}, {"four": 4}], {"one": 1}));
  
  // findWhere
  console.log("findWhere:", _.findWhere([{"one": 1}, {"two": 2}, {"three": 3}, {"four": 4}], {"one": 1}));
  
  // reject
  function isOdd(number) {
    return (number % 2 !== 0);
  }
  
  console.log("reject odds:", _.reject([1, 2, 3, 4, 5, 6], isOdd));
  
  // every
  console.log("every num is odd:", _.every([1, 3, 5, 7, 9], isOdd));
  
  // some
  console.log("some nums are even:", _.some([1, 2, 3, 4, 5], isEven));
  
  // contains
  console.log("contains 6:", _.contains([1, 2, 3, 4, 5], 6));
}());