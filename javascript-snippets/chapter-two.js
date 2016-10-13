/*global console*/

(function () {
  "use strict";
  
  var fortyTwo = function () { return 42; };
  console.log(fortyTwo());
  
  var fortyTwos = [42, fortyTwo()];
  console.log(fortyTwos);
  
  console.log(42 + fortyTwo());
  
  _.each(["whiskey", "tango", "foxtrot"], function (word) {
    console.log(word.charAt(0).toUpperCase() + word.substr(1));
  });
  
  var lyrics = [];
  
  for (var bottles = 99; bottles > 0; bottles -= 1) {
    lyrics.push(bottles + " bottles of beer on the wall,");
    lyrics.push(bottles + " bottles of beer,");
    lyrics.push("Take one down, pass it around");
    
    if (bottles > 1) {
      lyrics.push((bottles - 1) + " bottle(s) of beer on the wall.");
    } else {
      lyrics.push("No more bottles of beer on the wall.");
    }
  }
  
  // console.log(lyrics);
  
  function lyricSegment(n) {
    return _.chain([])
      .push(n + " bottles of beer on the wall,")
      .push(n + " bottles of beer,")
      .push("Take one down, pass it around")
      .tap(function(lyrics) {
          if (n > 1) {
            lyrics.push((n - 1) + " bottles of beer on the wall.");
          } else {
            lyrics.push("No more bottles of beer on the wall!");
          }
        })
      .value();
  }
  
  function song(start, end, lyricGen) {
    return _.reduce(_.range(start, end, -1),
      function (acc, n) {
      return acc.concat(lyricGen(n));
    }, []);
  }
  
  // console.log(lyricSegment(3));
  // console.log(song(10, 3, lyricSegment));
  
  function Point2D(x, y) {
    this._x = x;
    this._y = y;
  }
  
  function Point3D(x, y, z) {
    Point2D.call(this, x, y);
    this._z = z;
  }
  
  var twoDimensional = new Point2D(-1, 2);
  var threeDimensional = new Point3D(2, 3, -1);
  console.log(threeDimensional._x);
  
  var nums = [1, 2, 3, 4, 5];
  
  function doubleAll(array) {
    return _.map(array, function(n) {
      return n * 2;
    });
  }
  
  function average(array) {
    var sum = _.reduce(array, function(a, b) {
      return a + b;
    });
    return sum / _.size(array);
  }
  
  function onlyEven(array) {
    return _.filter(array, function(n) {
      return (n % 2) === 0;
    });
  }
  
  console.log(doubleAll(nums));
  console.log(average(nums));
  console.log(onlyEven(nums));
  
  var numbers = [100, 25, 2];
  
  function div(x, y) {
    return x / y;
  }
  
  console.log(_.reduce(numbers, div));
  console.log(_.reduceRight(numbers, div));
  
  console.log(_.find([1, 2, 3, 4, 5], _.isNumber));
  
}());