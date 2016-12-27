
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

// Form submission for the answer
var $form = document.getElementById("answer");

function update(element, content, appliedClass) {
  var p = element.firstChild || document.createElement("p");
  console.log(p);
  p.textContent = content;
  element.appendChild(p);
  if (appliedClass) {
    p.className = appliedClass;
  }
}

function hide (element) {
  element.style.display = "none";
}

function show (element) {
  element.style.display = "block";
}


// Quiz start button
$start.addEventListener("click", function () {
  play(quiz);
}, false);

hide($form);

function play(quiz) {
  
  var score = 0;
  update($scoreContainer, score);
  
  hide($start);
  show($form);
  
  $form.addEventListener("submit", function (event) {
    event.preventDefault();
    check($form[0].value);
  }, false);
  
  var i = 0;
  chooseQuestion();
  
  function chooseQuestion() {
    var question = quiz.questions[i].question;
    ask(question);
  }
  
  function ask(question) {
    update($questionContainer, quiz.question + question);
    $form[0].value = "";
    $form[0].focus;
  }

  function check(answer) {
    if (answer === quiz.questions[i].answer) {
      update($feedbackContainer, "Correct!", "correct");
      score += 1;
      update($scoreContainer, score);
    } else {
      update($feedbackContainer, "Incorrect!", "incorrect");
    }
    
    i += 1;
    
    if (i === quiz.questions.length) {
      gameOver();
    } else {
      chooseQuestion();
    }
  }

  function gameOver() {
    // alert("You scored a " + score + " out of " + max + "!");
    update($questionContainer, "Game Over, you scored " + score + " points.");
    hide($form);
    show($start);
  }
}