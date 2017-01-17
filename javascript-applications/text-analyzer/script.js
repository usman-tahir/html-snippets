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

  function analysis() {
    var output = "",
      numberOfWords = getNumberOfWords(textToAnalyze.value);
    /*
      TODO: All other points of analysis
    */
    output += numberOfWords;
    analysisOutput.innerHTML = output;
  }
  analyzeButton.addEventListener("click", analysis, false);

}());
