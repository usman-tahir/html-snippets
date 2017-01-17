(function() {

  "use strict";

  var analyzeButton = document.getElementById("submitText"),
    textToAnalyze = document.getElementById("inputText"),
    analysisOutput = document.getElementById("analysisOutput");

  function getNumberOfWords(input) {
    console.log(input);
    var words = input.split(" ");
    console.log(words);
    return "Number of words: " + words.length;
  }

  function getNumberOfLetters(input) {
    var words = input.split(""),
      pattern = /[a-zA-Z]/, // Uppercase and lowercase letters
      count = 0,
      i;
    for (i = 0; i < words.length; i += 1) {
      if (words[i].match(pattern)) {
        count += 1;
      }
    }
    return "Number of letters: " + count;
  }

  function analysis() {
    var output = "",
      text = textToAnalyze.value,
      numberOfWords = getNumberOfWords(text),
      numberOfLetters = getNumberOfLetters(text);
    /*
      TODO: All other points of analysis
    */
    output += numberOfWords + "<br />" + numberOfLetters;
    analysisOutput.innerHTML = output;
  }
  analyzeButton.addEventListener("click", analysis, false);

}());
