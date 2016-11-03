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
  
  // invoke
  console.log("sorted:", _.invoke([[3, 2, 1], [6, 5, 4]], 'sort'));
  
  // pluck
  console.log("stooge names:", _.pluck([{"name": "moe", "age": 40}, {"name": "larry", "age": 50}, {"name": "curly", "age": 60}], "name"));
  console.log("stooge ages:", _.pluck([{"name": "moe", "age": 40}, {"name": "larry", "age": 50}, {"name": "curly", "age": 60}], "age"));
  
  // max
  console.log("max:", _.max([5, 1, 3, 4, 2]));
  
  // min
  console.log("min:", _.min([4, 1, 3, 2, 5]));
  
  // sortBy
  function sortBySin(number) {
    return Math.sin(number);
  }
  
  console.log("sorted by Math.sin:", _.sortBy([1, 2, 3, 4, 5], sortBySin));
  
  // groupBy
  function getFloor(number) {
    return Math.floor(number);
  }
  
  console.log("group by Math.floor:", _.groupBy([1.2, 2.2, 2.4], getFloor));
  
  // indexBy
  console.log("index stooges by age:", _.indexBy([{"name": "moe", "age": 40}, {"name": "larry", "age": 50}, {"name": "curly", "age": 60}], "age"));
  
  // countBy
  function semanticEvenOddSort(number) {
    return (number % 2 === 0 ? "even" : "odd");
  }
  
  console.log("counted by parity:", _.countBy([1, 2, 3, 4, 5, 6], semanticEvenOddSort));
  
  // shuffle
  console.log("shuffled:", _.shuffle([1, 2, 3, 4, 5, 6]));
  
  // sample
  console.log("sample of 1:", _.sample([1, 2, 3, 4, 5], 1));
  console.log("sample of 3:", _.sample([1, 2, 3, 4, 5], 3));
  
  // toArray
  console.log("toArray:", function(){ return _.toArray(arguments).slice(1); }(1, 2, 3, 4));
  
  // size
  console.log("size:", _.size([1, 2, 3, 4]));
  
  // partition
  console.log("partition on parity:", _.partition([1, 2, 3, 4, 5, 6], isOdd));
}());