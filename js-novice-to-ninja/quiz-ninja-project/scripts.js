
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
};

/*
  DOM References
*/
var $questionContainer = document.getElementById("question");
var $scoreContainer = document.getElementById("score");
var $feedbackContainer = document.getElementById("feedback");
var $start = document.getElementById("start");

function update(element, content, appliedClass) {
  var p = element.firstChild || document.createElement("p");
  console.log(p);
  p.textContent = content;
  element.appendChild(p);
  if (appliedClass) {
    p.className = appliedClass;
  }
}

// Quiz start button
$start.addEventListener("click", function () {
  play(quiz);
}, false);

function play(quiz) {
  
  var score = 0;
  update($scoreContainer, score);
  
  // Main game loop
  for (var i = 0, question, answer, max = quiz.questions.length; i < max; i += 1) {
    question = quiz.questions[i].question;
    answer = ask(question);
    check(answer);
  }
  gameOver();
  
  function ask(question) {
    update($questionContainer, quiz.question + question);
    return prompt("Enter your answer:");
  }

  function check(answer) {
    if (answer === quiz.questions[i].answer) {
      update($feedbackContainer, "Correct!", "correct");
      score += 1;
      update($scoreContainer, score);
    } else {
      update($feedbackContainer, "Incorrect!", "incorrect");
    }
  }

  function gameOver() {
    // alert("You scored a " + score + " out of " + max + "!");
    update($questionContainer, "Game Over, you scored " + score + " points.");
  }
}