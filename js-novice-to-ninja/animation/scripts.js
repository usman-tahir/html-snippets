
var square = document.getElementById("square"),
  angle = 0;

function rotate() {
  angle = (angle + 5) % 360;
  square.style.transform = "rotate(" + angle + "deg)";
  window.requestAnimationFrame(rotate);
}

var id = window.requestAnimationFrame(rotate);
window.cancelAnimationFrame(id);