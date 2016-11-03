// underscorejs examples for arrays
(function () {
  "use strict";
  
  // first
  console.log("first element:", _.first([1, 2, 3, 4, 5]));
  
  // initial
  console.log("everything but the last element:", _.initial([1, 2, 3, 4, 5]));
  
  // last
  console.log("last element:", _.last([1, 2, 3, 4, 5]));
  
  // rest
  console.log("everything but the first element:", _.rest([1, 2, 3, 4, 5]));
  
  // compact
  console.log("no falsy values:", _.compact([0, 1, false, 2, '', 3])); // [1, 2, 3]
  
  // flatten
  // completely flattened
  console.log("completely flattened:", _.flatten([1, [2], [3, [[4]]]]));
  
  // 'shallow' flattened
  console.log("shallow flattened:", _.flatten([1, [2], [3, [[4]]]], true));
  
  // without
  console.log("without 0 and 1:", _.without([1, 2, 1, 0, 3, 1, 4], 0, 1));
  
  // union
  console.log("union operation on lists:", _.union([1, 2, 3], [1, 4, 5], [6, 7, 8]));
  
  // intersection
  console.log("intersection operation on lists:", _.intersection([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [5, 6, 7, 8]));
  
  // difference
  console.log("difference operation on lists:", _.difference([1, 2, 3, 4], [1, 2, 6, 7]));
  
  // uniq
  console.log("unique list:", _.uniq([1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 5]));
  
  // zip
  console.log("merged lists based on index:", _.zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));
  
  // unzip
  console.log("split lists based on index:", _.unzip([[1, 4, 7], [2, 5, 8], [3, 6, 9]]));
  
  // object
  console.log("objects created from list:", _.object(["a", "b", "c"], [1, 2, 3]));
  
  // indexOf
  console.log("index of 1:", _.indexOf([1, 2, 3], 1));
  
  // lastIndexOf
  console.log("last index of 1:", _.lastIndexOf([1, 2, 1, 1, 4, 2, 1, 2, 1, 5], 1)); // 8
  
  // sortedIndex
  console.log("35 belongs at index:", _.sortedIndex([10, 20, 30, 40, 50, 60], 35));
  
  // findIndex
  function isEven(number) {
    return (number % 2 == 0);
  }
  
  console.log("even number at index:", _.findIndex([1, 2, 3, 4], isEven));
  
  // findLastIndex
  console.log("last even number at index:", _.findLastIndex([1, 2, 3, 4], isEven));
  
  // range
  console.log("list with range 1 - 10:", _.range(1, 11));
  console.log("list with range 0 - 30 with step 5:", _.range(0, 35, 5));
}());