
(function () {
  "use strict";
  
  var quiz = {
    name: "Superhero Name Quiz",
    description: "How many Superheroes can you name?",
    question: "Who is ",
    questions: [
      {question: "Superman?", answer: "Clark Kent"},
      {question: "Batman?", answer: "Bruce Wayne"},
      {question: "Wonder Woman?", answer: "Dianna Prince"}
    ]
  },
    $questionContainer = document.getElementById("question"),
    $scoreContainer = document.getElementById("score"),
    $feedbackContainer = document.getElementById("feedback"),
    $start = document.getElementById("start"),
    $timer = document.getElementById("timer"),
    $form = document.getElementById("answer");
  
  function update(element, content, appliedClass) {
    var p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if (appliedClass) {
      p.className = appliedClass;
    }
  }

  function hide(element) {
    element.style.display = "none";
  }

  function show(element) {
    element.style.display = "block";
  }

  function play(quiz) {

    var score = 0,
      time = 20,
      interval = window.setInterval(countDown, 1000),
      i = 0;
    $timer.style.color = "green";
    update($timer, time);
    update($scoreContainer, score);

    hide($start);
    show($form);

    $form.addEventListener("submit", function (event) {
      event.preventDefault();
      check($form[0].value);
    }, false);
    
    chooseQuestion();

    function chooseQuestion() {
      console.log("chooseQuestion() invoked");
      var question = quiz.questions[i].question;
      ask(question);
    }

    function ask(question) {
      console.log("ask() invoked");
      update($questionContainer, quiz.question + question);
      $form[0].value = "";
      $form[0].focus;
    }

    function check(answer) {
      console.log("check() invoked");
      if (answer.toLowerCase() === quiz.questions[i]["answer"].toLowerCase()) {
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

    function countDown () {
      console.log("countDown() invoked");
      // Decrease time by 1
      time -= 1;

      if (time > 10) {
        $timer.style.color = "green";
      } else if (time >= 5) {
        $timer.style.color = "orange";
      } else {
        $timer.style.color = "red";
      }

      // Update the time
      update($timer, time);

      // The game is over, if the time reaches 0
      if (time === 0) {
        window.clearInterval(interval);
        gameOver();
      }
    }

    function gameOver() {
      console.log("gameOver() invoked");
      // alert("You scored a " + score + " out of " + max + "!");
      window.clearInterval(interval);
      update($questionContainer, "Game Over, you scored " + score + " points.");
      hide($form);
      show($start);
    }
  }
  
  // Quiz start button
  $start.addEventListener("click", function () {
    play(quiz);
  }, false);

  hide($form);
}());