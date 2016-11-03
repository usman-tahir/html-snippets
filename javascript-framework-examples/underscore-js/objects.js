// underscorejs examples for objects
(function () {
  "use strict";
  
  // keys
  console.log("keys:", _.keys({1: "one", 2: "two", 3: "three"}));
  
  // allKeys
  function Stooge(name) {
    this.name = name;
  }
  Stooge.prototype.silly = true;
  
  console.log("all keys:", _.allKeys(new Stooge("Moe"))); // ["name", "silly"]
  
  // values
  console.log("values:", _.values({1: "one", 2: "two", 3: "three"}));
  
  // mapObject
  function increment(value, key) {
    return value + 1;
  }
  
  console.log("mapped object:", _.mapObject({start: 0, end: 0}, increment));
  
  // pairs
  console.log("list pairs:", _.pairs({1: "one", 2: "two", 3: "three"}));
  
  // invert
  console.log("inverted keys and values:", _.invert({1: "one", 2: "two", 3: "three"}));
  
  // create
  console.log("creating new object with prototype:", _.create(Stooge.prototype, {name: "Moe"}));
  
  // functions
  console.log("functions for _", _.functions(_));
  
  // findKey
  function findGreaterThanOne(value) {
    return (value > 1);
  };
  
  console.log("finding the key '1':", _.findKey({"one": 1, "two": 2, "three": 3}, findGreaterThanOne)); // 'two'
  console.log("finding the key '4':", _.findKey({"zero": 0}, findGreaterThanOne)); // undefined
  
  // extend
  console.log("shallow copy from source obj to destination obj:", _.extend({1: "one"}, {2: "two"}));
  
  // extendOwn
  console.log("extending own properties from source obj to destination obj:", _.extendOwn({1: "one"}, {2: "two", 3: "three"}));
  
  // pick
  console.log("pick only certain key value pairs:", _.pick({"name": "Moe", "age": 50, "userId": 1}, "name"));
  
  // omit
  console.log("omit userId:", _.omit({"name": "Moe", "age": 50, "userId": 1}, "userId"));
  
  // defaults
  var iceCream = {flavor: "chocolate"};
  console.log("add default sprinkles key:", _.defaults(iceCream, {flavor: "vanilla", sprinkles: "none"}));
  
  // clone
  var original = {name: "Moe"},
    cloned = _.clone(original);
  console.log("cloned object:", cloned);
  
  // tap
  function isEven(n) {
    return (n % 2 === 0);
  }
  
  function double(n) {
    return (n * 2);
  }
  
  console.log("evens:");
  _.chain([1, 2, 3, 200])
    .filter(isEven)
    .tap(console.log)
    .map(double)
    .value();
  
  // has
  console.log("has key 2:", _.has({1: "one", 2: "two", 3: "three"}, 2));
  
  // property
  var stooge = {name: "Moe"};
  console.log("'Moe' is the stooge's name:", 'Moe' === _.property('name')(stooge));
  
  // propertyOf
  console.log("the stooge's name is:", _.property('name')(stooge));
  
  // matcher
  var obj = {1: "one", 2: "two"};
  console.log("obj matches input:", _.matcher({1: "one"})(obj));
  
  // isEqual
  var stooge = {name: "Moe", luckyNumbers: [1, 2, 3]};
  var stoogeClone = {name: "Moe", luckyNumbers: [1, 2, 3]};
  console.log("stooge equals stoogeClone:", _.isEqual(stooge, stoogeClone));
  
  // isMatch
  console.log("stooge's age is 50:", _.isMatch({name: "Moe", age: 50}, {age: 50}));
  
  // isEmpty
  console.log("list is empty:", _.isEmpty([])); // true
  console.log("list is empty:", _.isEmpty([1])); // false
  
  // isElement
  console.log("is element:", _.isElement(jQuery('body')[0])); // body exists? true
  
  // isArray
  console.log("is this an array:", _.isArray([1, 2, 3]));
  
  // isObject
  console.log("is this an object:", _.isObject({})); // true
  console.log("is this an object:", _.isObject(1)); // false
  
  // isArguments
  var func = (function() { return _.isArguments(arguments); })(1, 2, 3);
  console.log("is this an Argument object:", _.isArguments([1, 2, 3]));
  console.log("is this an Argument object:", func);
  
  // isFunction
  function useless() {
    return null;
  }
  console.log("is alert() a function:", _.isFunction(alert)); // true;
  console.log("is useless() a function:", _.isFunction(useless)); // true
  
  // isString
  console.log("is this a string:", _.isString("hello")); // true
  
  // isNumber
  console.log("is this a number:", _.isNumber(123)); // true;
  
  // isFinite
  console.log("is this number finite:", _.isFinite(Infinity)); // false
  
  // isBoolean
  console.log("is this a boolean:", _.isBoolean(false)); // true
  
  // isDate
  console.log("is this a date:", _.isDate(new Date())); // true
  
  // isRegExp
  console.log("is this regex:", _.isRegExp(/hello/)); // true
  
  // isError
  function errorDivide() {
    try {
      throw new TypeError("example");
    } catch(error) {
      return error;
    }
  }
  
  console.log("is this an error:", _.isError(errorDivide()));
  
  // isNaN
  console.log("is this NaN:", _.isNaN(NaN)); // true
  
  // isNull
  console.log("is this null:", _.isNull(null)); // true
  
  // isUndefined
  console.log("is this undefined:", _.isUndefined(123)); // false
}());