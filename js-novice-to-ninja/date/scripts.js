
var today = new Date();
console.log(today);
console.log(today.toString());

var christmas = new Date("2014 12 25");
console.log("Christmas 2014: " + christmas);
console.log(christmas.toString());

var chanukah = new Date("16 December 2014");
console.log("Chanukah 2014: " + chanukah);

var eid = new Date("Saturday, July 18, 2015");
console.log("Eid 2015: " + eid);

var easter = new Date(2015, 3, 05);
console.log(easter.toString());

var diwali = new Date(1414018800000);
console.log("Diwali 2014: " + diwali);
console.log("Day for Diwali: " + diwali.getDay());
console.log("Date for Diwali: " + diwali.getDate());
console.log("Month for Diwali: " + diwali.getMonth());
console.log("Year for Diwali: " + diwali.getYear()); // Bug occurs for years after 2014
console.log("Full year for Diwali: " + diwali.getFullYear());
console.log("Time (ms) for Diwali: " + diwali.getTime());

// The day before Christmas, Christmas Eve
var christmasEve = new Date(christmas.getTime() - (1000 * 60 * 60 * 24));
console.log("Christmas Eve 2014: " + christmasEve);

console.log("Timezone offset: " + new Date().getTimezoneOffset());