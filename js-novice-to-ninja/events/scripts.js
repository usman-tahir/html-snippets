
document.getElementById("clickParagraph").addEventListener("click", doSomething);

// Add the highlight toggling
var singleClick = document.getElementById("singleClick"),
  doubleClick = document.getElementById("doubleClick"),
  mouseOver = document.getElementById("mouseOver");

singleClick.addEventListener("click", highlight);
doubleClick.addEventListener("dblclick", highlight);
mouseOver.addEventListener("mouseover", highlight);

function doSomething(event) {
  var screenCoordinates = "Screen: (" + event.screenX + ", " + event.screenY + "), ",
    pageCoordinates = "Page: (" + event.pageX + ", " + event.pageY + "), ",
    clientCoordinates = "Client: (" + event.screenX + ", " + event.screenY + ")";
  console.log(screenCoordinates + pageCoordinates + clientCoordinates);
  
  /*
  switch (event.which) {
    case 1:
      console.log("you clicked the left mouse button");
      break;
    case 2:
      console.log("you clicked the middle mouse button");
      break;
    case 3:
      console.log("you clicked the right mouse button");
      break;
  }
  */
}

function highlight (event) {
  event.target.classList.toggle("highlight");
}

// Key presses
document.addEventListener("keypress", function (event) {
  console.log("You pressed the '" + String.fromCharCode(event.charCode) + "' character.");
  /*
  var date = new Date();
  console.log("You stopped pressing this character at " + date);
  */
  if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
    console.log("You also pressed a modifier key.");
  }
});

// Event propogation handling
var ul = document.getElementById("list"),
  li = document.querySelector("#list li");

ul.addEventListener("click", function (event) {
  console.log("clicked on ul");
});

ul.addEventListener("click", highlight);

li.addEventListener("click", function (event) {
  console.log("clicked on li");
});