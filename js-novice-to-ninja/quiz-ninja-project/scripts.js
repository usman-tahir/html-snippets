
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

play(quiz);

function play(quiz) {
  // Main game loop
  var i,
    max = quiz.length;
  
  for (i = 0; i < max; i += 1) {
    question = quiz[i][0];
    answer = ask(question);
    check(answer);
  }
  gameOver();
  
  function ask(question) {
    return prompt(question);
  }

  function check(answer) {
    if (answer === quiz[i][1]) {
      alert("Correct!");
      score += 1;
    } else {
      alert("Incorrect.");
    }
  }

  function gameOver() {
    alert("You scored a " + score + " out of " + max + "!");
  }
}