
// Quiz Object
var quiz = {
  name: "Superhero Name Quiz",
  description: "How many superheroes can you name?",
  question: "Who is ",
  questions: [
    {
      question: "Superman?", answer: "Clark Kent"
    },
    {
      question: "Batman?", answer: "Bruce Wayne"
    },
    {
      question: "Wonder Woman?", answer: "Dianna Prince"
    }
  ]
},
  score = 0;

alert(quiz.description);
play(quiz);

function play(quiz) {
  // Main game loop
  var i,
    max = quiz.questions.length;
  
  for (i = 0; i < max; i += 1) {
    question = quiz.question + quiz.questions[i].question;
    answer = ask(question);
    check(answer);
  }
  gameOver();
  
  function ask(question) {
    return prompt(question);
  }

  function check(answer) {
    if (answer === quiz.questions[i].answer) {
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