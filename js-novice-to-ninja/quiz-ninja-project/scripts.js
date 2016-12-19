
alert("Welcome to Quiz Ninja.");

// Array of quiz questions
var quiz = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Wonderwoman's real name?", "Diana Prince"],
  ["What is Batman's real name?", "Bruce Wayne"]
],
  score = 0,
  max = quiz.length,
  i;

for (i = 0; i < max; i += 1) {
  var answer = prompt(quiz[i][0]);
  
  // Check if the answer is correct
  if (answer === quiz[i][1]) {
    alert("Correct!");
    score += 1;
  } else {
    alert("Wrong.");
  }
}

alert("You scored a " + score + " out of " + max);
