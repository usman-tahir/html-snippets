/*global console*/

(function () {
  "use strict";
  
  var gameButtons = document.getElementsByClassName("game-button");
  
  function addClickListener(buttons) {
    var i;
    for (i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener("click", function () {
        console.log("clicked");
      }, false);
    }
  }
  
  addClickListener(gameButtons);
}());