/*global console*/

(function () {
  "use strict";
  
  function initGame() {
    var gameButtons = document.getElementsByClassName("game-button"),
      simonSaysSequence = [],
      difficulty = 1,
      i;
    
    function generateSimonSaysSequence() {
      var buttons = ["green", "red", "yellow", "blue"];
    }
    
    function addEventToButton(button) {
      var eventButton = button.addEventListener("click", function () {
        console.log(this.innerHTML);
      });
      return eventButton;
    }

    for (i = 0; i < gameButtons.length; i += 1) {
      addEventToButton(gameButtons[i]);
    }
  }
  
  function startGame() {
    console.log("The game has been started.");
    window.addEventListener("load", initGame(), false);
  }
  
  startGame();
  
}());