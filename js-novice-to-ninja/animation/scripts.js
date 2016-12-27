
var square = document.getElementById("square"),
  angle = 0;

setInterval(function () {
  angle = (angle + 5) % 360;
  square.style.transform = "rotate(" + angle + "deg)";
  console.log("current angle --> " + angle + " degrees");
}, 1000 / 6);