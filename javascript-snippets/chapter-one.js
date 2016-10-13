/*global console*/

(function () {
  "use strict";
  
  [1, 2, 3].forEach(console.log);
  
  function splat(fun) {
    return function(array) {
      return fun.apply(null, array);
    };
  }
  
  var addArrayElements = splat(function(x, y) {
    return x + y;
  });
  
  /*
  var subtractArrayElements = splat(function(x, y) {
    return x - y;
  });
  */
  
  function unsplat(fun) {
    return function() {
      return fun.call(null, _.toArray(arguments));
    };
  }
  
  var joinElements = unsplat(function(array) {
    return array.join(" ");
  });
  
  console.log(joinElements(1, 2));
  console.log(joinElements("-", "$", "/", "!", ":"));
  
  console.log(addArrayElements([1, 2]));
  
  function fail(thing) {
    throw new Error(thing);
  }
  
  function warn(thing) {
    console.log(["WARNING:", thing].join(" "));
  }
  
  function note(thing) {
    console.log(["NOTE:", thing].join(" "));
  }
  
  function parseAge(age) {
    if (!_.isString(age)) {
      fail("Expecting a string");
    }
    var a;
    
    note("attemping to parse an age");
    
    a = parseInt(age, 10);
    
    if (_.isNaN(a)) {
      warn(["could not parse age: ", age].join(" "));
    }
    
    return a;
    
  }
  
  // parseAge(12);
  parseAge("23");
  // parseAge("hello");
  
  function isIndexed(data) {
    return _.isArray(data) || _.isString(data);
  }
  
  function nth(a, index) {
    if (!_.isNumber(index)) {
      fail("Expected a number as an index");
    } else if (!isIndexed(a)) {
      fail("Not supported on non-indexed type");
    } else if ((index < 0) || (index > a.length - 1)) {
      fail("Index value is out of bounds");
    }
    
    return a[index];
    
  }
  
  nth([1, 2, 3], 0);
  
  console.log([5, 2, 1, 3, 4].sort());
  
  /*
  function lessOrEqual(x, y) {
    return x <= y;
  }
  */
  
  function compareLessThanOrEqual(x, y) {
    if (x < y) {
      return -1;
    } else if (y < x) {
      return 1;
    }
    return 0;
  }
  
  console.log([2, 3, -1, -6, 0, -108, 42, 10].sort(compareLessThanOrEqual));
  
  /*
  function comparator(predicate) {
    return function(x, y) {
      if (truthy(predicate(x, y))) {
        return -1;
      } else if (truthy(predicate(y, x))) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  */
  
  function lameCSV(string) {
    return _.reduce(string.split("\n"), function(table, row) {
      table.push(_.map(row.split(","), function(c) {
        return c.trim();
      }))
      return table;
    }, []);
  };
  
  var peopleTable = lameCSV("name,age,hair\nJohn,22,black\nTina,21,red");
  console.log(peopleTable);
  
  function selectNames(table) {
    return _.rest(_.map(table, _.first));
  }
  
  /*
  function selectAges(table) {
    return _.rest(_.map(table, _.second));
  }
  */
  
  console.log(selectNames(peopleTable));
  // console.log(selectAges(peopleTable));
  
}());