// underscorejs examples for functions
(function () {
  "use strict";
  
  // bind
  var func = function(greeting) {
    return (greeting + ", " + this.name + "!");
  }
  
  func = _.bind(func, {name: "Usman"}, "Hello");
  console.log(func());
  
  // bindAll
  var buttonView = {
    label: "underscore",
    onClick: function() {
      console.log("clicked:", this.label);
    },
    onHover: function() {
      console.log("hovering:", this.label);
    }
  };
  
  _.bindAll(buttonView, "onClick", "onHover");
  jQuery("#underscore-button").on("click", buttonView.onClick);
  jQuery("#underscore-button").on("mouseover", buttonView.onHover);
  
  // partial
  var subtract = function(a, b) {
    return b - a;
  }
  
  var subtractFive = _.partial(subtract, 5);
  console.log(subtractFive(20)); // 15
  console.log(subtractFive(15)); // 10
  
  // memoize
  var fibonacci = _.memoize(function(n) {
    return ((n < 2) ? n : fibonacci(n - 1) + fibonacci(n - 2));
  });
  console.log(fibonacci(3)); // the third fibonacci number
  console.log(fibonacci(10));
  
  // delay
  var log = _.bind(console.log, console);
  _.delay(log, 1000, "logged after one second");
  // _.delay(log, 10000, "logged after ten seconds");
  
  // defer
  _.defer(function() {
    console.log("deferred");
  });
  
  // throttle
  
  var updatePosition = 0,
    throttled = _.throttle(updatePosition, 100);
  $(window).scroll(throttled);
  
  // debounce
  var calculateLayout = -1,
    lazyLayout = _.debounce(calculateLayout, 300);
  $(window).resize(lazyLayout);
  
  // once
  var createApplication = function() {
    console.log("Application started.");
  };
  var initialize = _.once(createApplication);
  
  initialize();
  initialize(); // application is only created once
  
  // after
  function render(notes) {
    _.each(notes, function(note) {
      console.log(note);
    });
  };
  
  var notes = ["note 1", "note 2", "note 3"];
  var renderNotes = _.after(notes.length, render(notes));
  renderNotes();
  
  // before
  function askForRaise() {
    console.log("Please give me a raise!");
  }
  
  var monthlyMeeting = _.before(3, askForRaise);
  monthlyMeeting();
  monthlyMeeting();
  monthlyMeeting(); // no printout
  
  // wrap
  var hello = function(name) {
    return ("hello, " + name);
  }
  
  hello = _.wrap(hello, function(func) {
    return "before: " + func("Usman") + ", after";
  });
  console.log(hello());
  
  // negate
  var isFalsy = _.negate(Boolean);
  console.log(_.find([-2, -1, 0, 1, 2], isFalsy)); // 0
  
  // compose
  var greet = function(name) {
    return ("hi, " + name);
  };
  
  var exclaim = function(statement) {
    return (statement.toUpperCase() + "!");
  };
  
  var welcome = _.compose(greet, exclaim);
  console.log(welcome("Usman"));
}());