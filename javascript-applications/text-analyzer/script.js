(function() {

  "use strict";

  var analyzeButton = document.getElementById("submitText"),
    textToAnalyze = document.getElementById("inputText"),
    analysisOutput = document.getElementById("analysisOutput");

  function getNumberOfWords(input) {
    var words = input.split(" "),
      pattern = /[a-zA-Z]/,
      count = 0,
      i;

    for (i = 0; i < words.length; i += 1) {
      if (words[i].match(pattern)) {
        count += 1;
      }
    }

    return "Number of words: " + count;
  }

  function getNumberOfLetters(input) {
    var letters = input.split(""),
      pattern = /[a-zA-Z]/, // Uppercase and lowercase letters
      count = 0,
      i;
    for (i = 0; i < letters.length; i += 1) {
      if (letters[i].match(pattern)) {
        count += 1;
      }
    }
    return "Number of letters: " + count;
  }

  function getNumberOfSpaces(input) {
    var characters = input.split(""),
      pattern = /[\s+]/,
      count = 0,
      i;

    for (i = 0; i < characters.length; i += 1) {
      if (characters[i].match(pattern)) {
        count += 1;
      }
    }
    return "Number of spaces: " + count;
  }

  function analysis() {
    var output = "",
      text = textToAnalyze.value,
      numberOfWords = getNumberOfWords(text),
      numberOfLetters = getNumberOfLetters(text),
      numberOfSpaces = getNumberOfSpaces(text);

    output += numberOfWords + "<br />" + numberOfLetters + "<br />" + numberOfSpaces;
    analysisOutput.innerHTML = output;
  }
  analyzeButton.addEventListener("click", analysis, false);

}());
