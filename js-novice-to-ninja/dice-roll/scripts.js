
var dice = {
  sides: 6,
  roll: function () {
    return Math.floor(this.sides * Math.random()) + 1;
  },
  multipleRoll: function (times) {
    var i,
      rolls = [];
    for (i = 0; i < times; i += 1) {
      rolls[i] = this.roll();
    }
    // console.log("Rolled: " + rolls);
    return rolls;
  },
  sumMultipleRoll: function(times) {
    var rolls = this.multipleRoll(times),
      sumOfRolls = rolls.reduce(function (current, next) { return current + next }, 0);
    console.log("Rolled: " + rolls + " Sum: " + sumOfRolls);
    return sumOfRolls;
  },
  toString: function () {
    return "This dice has " + this.sides + " sides.";
  }
}

console.log(dice.toString());

// Roll the dice once
console.log(dice.roll());
console.log(dice.multipleRoll(6)); // Rolls the dice x times
console.log(dice.sumMultipleRoll(6)); // Rolls the dice x times and then sums the results