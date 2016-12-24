
// Example of an object
var superman = {
  name: "Superman",
  realName: "Clark Kent",
  height: 75,
  weight: 235,
  hero: true,
  villain: false,
  allies: ["Batman", "Supergirl", "Superboy"],
  fly: function () {
    return "Up, up and away!";
  }
}

console.log(superman);
console.log(superman["name"] + " aka " + superman["realName"]);
console.log(superman.fly());
console.log(superman.allies.forEach(function(ally, index) { console.log("ally " + index + ": " + ally)}));

// Delete a property
delete superman.villain;

// Loop through all the properties of an object
for (var key in superman) {
  console.log(key + " -> " + superman[key]);
}

// JSON examples
var batman = '{"name": "Batman", "realName": "Bruce Wayne", "height": 74, "weight": 210, "hero": true, "allies": ["Robin", "Batgirl", "Superman"]}';

JSON.parse(batman);
console.log(batman);

console.log(JSON.stringify(superman));