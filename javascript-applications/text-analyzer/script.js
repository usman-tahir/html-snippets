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

  function getCharacterCount(input) {
    var characters = {},
      elements = input.split(""),
      output = "<br><br><table border='1'><tr><td>Character</td><td>Count</td></tr>",
      i;

    for (i = 0; i < elements.length; i += 1) {
      if (characters[elements[i]]) {
        characters[elements[i]] += 1;
      } else {
        characters[elements[i]] = 1;
      }
    }

    for (i = 0; i < Object.keys(characters).length; i += 1) {
      var key = Object.keys(characters)[i],
        value = Object.values(characters)[i];

      if (key === " ") {
        key = "space";
      }
      output += "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
    }
    console.log(output);
    return output + "</table>";
  }

  function analysis() {
    var output = "",
      text = textToAnalyze.value,
      numberOfWords = getNumberOfWords(text),
      numberOfLetters = getNumberOfLetters(text),
      numberOfSpaces = getNumberOfSpaces(text),
      atomicCharacterCount = getCharacterCount(text);

    output += numberOfWords + "<br />" + numberOfLetters + "<br />" + numberOfSpaces +
      atomicCharacterCount;
    analysisOutput.innerHTML = output;
  }
  analyzeButton.addEventListener("click", analysis, false);

}());
