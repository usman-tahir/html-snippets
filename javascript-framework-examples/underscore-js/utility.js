// underscorejs examples for utility
(function () {
  "use strict";
  
  // noConflict
  var underscore = _.noConflict(); // return control of _ to its previous owner
  console.log(underscore);
  
  // identity
  var stooge = {name: "Moe"};
  console.log("stooge === stooge (identity):", stooge === underscore.identity(stooge));
  
  // constant
  console.log("underscore.constant(stooge)() returns stooge:", stooge === underscore.constant(stooge)());
  
  // noop
  var obj = {};
  console.log(obj.initialize = underscore.noop);
  
  // times
  function printer(n) {
    console.log("currently", n + 1);
  }
  
  underscore(3).times(printer);
  
  // random
  console.log("random number between 1 and 100:", underscore.random(1, 100));
  
  // mixin
  underscore.mixin({
    capitalize: function(string) {
      return (string.charAt(0).toUpperCase() + string.substring(1).toLowerCase());
    }
  });
  
  console.log("capitalized/title cased word:", underscore.capitalize("hello"));
  
  // iteratee
  console.log(underscore.iteratee()); // no value (identity)
  
  function double(n) {
    return (n * 2);
  }
  
  console.log("underscore.iteratee() is now:", underscore.iteratee(double));
  
  // uniqueId
  console.log("generate uniqueId for contact_:", underscore.uniqueId("contact_"));
  console.log("generate another uniqueId for contact_:", underscore.uniqueId("contact_"));
  
  // escape
  console.log("escaped characters:", underscore.escape("< > &"));
  
  // unescape
  console.log("unescaped characters:", underscore.unescape("&lt; &gt; &amp;"));
  
  // result
  var obj = {cheese: "crumpets", stuff: function() { return "nonsense"; }};
  console.log("the cheese key returns:", underscore.result(obj, 'cheese'));
  console.log("the stuff key returns:", underscore.result(obj, 'stuff'));
  
  // now
  console.log("the current time (timestamp) is:", underscore.now());
  
  // template
  var compiled = underscore.template("hello: <%= name %>");
  compiled({name: "Usman"});
  console.log("compiled:", compiled);
}());