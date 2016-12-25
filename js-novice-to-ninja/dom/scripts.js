
var body = document.body;
console.log(body);
console.log("Type of body: " + typeof body);
console.log("body's node type: " + body.nodeType);
console.log("body's node name: " + body.nodeName);

var title = document.getElementById("title");
console.log(title);
console.log(title.innerHTML); // 'Triathlon'

var paragraphs = document.getElementsByTagName("p");
console.log("Type of paragraphs variable: " + typeof paragraphs);
console.log(paragraphs);

console.log(document.getElementsByClassName("swim"));
console.log(document.getElementsByClassName("swim").length); // 1

console.log(document.getElementsByClassName("walk").length); // 0

var bike = document.querySelector("#bike");
console.log(bike);

// List of all elements with a class of 'swim'
var swim = document.querySelectorAll(".swim");
console.log(swim);

var meta = document.getElementsByTagName("meta")[0].getAttribute("charset");
console.log(meta);

// Set an attribute
var run = document.querySelector("p:last-child");
console.log(run);
console.log(run.setAttribute("id", "run"));
console.log(run.getAttribute("id"));

function createElement(tag, text) {
  var element = document.createElement(tag);
  element.textContent = text;
  return element;
}

var sports = document.getElementById("sports");
console.log("initial length of #sports: " + sports.children.length);
sports.appendChild(createElement("p", "new element"));
console.log("added a new element, length is now " + sports.children.length);

// Change the text of an element
var h1 = document.getElementById("title");
var newText = document.createTextNode("Iron Man Triathlon");
h1.replaceChild(newText, h1.firstChild);

// Update styles via the DOM
var swim = document.getElementsByClassName("swim")[0];
swim.style.border = "blue 2px solid";

bike.style.backgroundColor = "green";

run.style.display = "block";
run.style.display = "none";