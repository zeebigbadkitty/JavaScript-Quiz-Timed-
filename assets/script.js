//STARTING VARIABLES//
var questionLine = document.getElementById("question-line");
var startBtn = document.getElementById("start-btn");
var scoresBtn = document.getElementById("scores-btn");
var score = document.querySelector("#current-score");
var answersButton = document.getElementById("answer-btns");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var scoreDisplay = document.querySelector("#score-display");
var timerInterval;

//TIMER//
var timerEl = document.querySelector("#timer");
var secondsLeft = 180;
function setTime() {
    timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.innerHTML = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("Times up! Game over!");
      window.location.href = "scores.html";
      scoreDisplay.textContent = currentScore;
      endGame()
    }
  }, 1000);
}
console.log(window.location.href)
if (window.location.href=="http://127.0.0.1:5501/quiz.html" || window.location.href =="https://zeebigbadkitty.github.io/JavaScript-Quiz-Timed-/quiz.html" ){
setTime();
}

var currentScore = 0;
var startingScore = "🏅 Your current score:     " + currentScore;
score.textContent = currentScore;

// QUESTIONS AND ANSWERS ARRAY//
var quizQuestions = [
  {
    question: "What are JavaScript Data types?",
    answers: [
      { text: "Numbers", isCorrect: false },
      { text: "Strings", isCorrect: false },
      { text: "Boolean", isCorrect: false },
      { text: "All of the Above", isCorrect: true },
    ],
  },
  {
    question: "What company developed JavaScript?",
    answers: [
      { text: "IBM", isCorrect: false },
      { text: "Oracle", isCorrect: false },
      { text: "Netscape", isCorrect: true },
      { text: "Microsoft", isCorrect: false },
    ],
  },
  {
    question: "What symbols are used to denote comments in JavaScript? ",
    answers: [
      { text: "/", isCorrect: true },
      { text: "$", isCorrect: false },
      { text: "*", isCorrect: false },
      { text: ";", isCorrect: false },
    ],
  },
  {
    question: "What function is used to make conversions? ",
    answers: [
      { text: "Type", isCorrect: false },
      { text: "Convert", isCorrect: false },
      { text: "Log", isCorrect: false },
      { text: "Parse", isCorrect: true },
    ],
  },
  {
    question: "Which of the follow is not a valid variable name in JavaScript?",
    answers: [
      { text: "2headers", isCorrect: true },
      { text: "_first_header", isCorrect: false },
      { text: "MyHeader", isCorrect: false },
      { text: "$myList", isCorrect: false },
    ],
  },
  {
    question: "Select the HTML tag that is used to link JavaScript files. ",
    answers: [
      { text: "<href>", isCorrect: false },
      { text: "<link>", isCorrect: false },
      { text: "<!DOCTYPE>", isCorrect: false },
      { text: "<script>", isCorrect: true },
    ],
  },
  {
    question:
      "Using these types of statements is how you test for a specific condition.",
    answers: [
      { text: "for", isCorrect: false },
      { text: "if", isCorrect: true },
      { text: "switch", isCorrect: false },
      { text: "log", isCorrect: false },
    ],
  },
  {
    question:
      "The following method of an array adds and/or removes elements from an array.",
    answers: [
      { text: "Join", isCorrect: false },
      { text: "Shift", isCorrect: false },
      { text: "Concat", isCorrect: false },
      { text: "Splice", isCorrect: true },
    ],
  },
  {
    question: "What does the acronym JSON stand for?",
    answers: [
      { text: "Java Standard Output Network", isCorrect: false },
      { text: "JavaScript Object Notation", isCorrect: true },
      { text: "JavaScript Output Name", isCorrect: false },
      { text: "Java Source Open Network", isCorrect: false },
    ],
  },
  {
    question:
      "What is the output of the following function?\nvar num = 8;\nvar num = 10;\nconsole.log(num);",
    answers: [
      { text: "8", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "80", isCorrect: false },
      { text: "10", isCorrect: true },
    ],
  },
  {
    question: "What does the keyword “this” mean in JavaScript?",
    answers: [
      { text: "It is a variable that contains a value", isCorrect: false },
      { text: "It references the document", isCorrect: false },
      { text: "It refers to the current object", isCorrect: true },
      { text: "None of the above. ", isCorrect: false },
    ],
  },
];

//DISPLAY RANDOM QUESTION
var questionIndex = 0;

function currentQuestion() {
  console.log(questionIndex);
  // for(let i = 0; i<=quizQuestions.length; i++){
  questionLine.textContent = quizQuestions[questionIndex].question;
  // for (i=0; i<=3; i++){
  //     opt1.textContent = quizQuestions[questionIndex].answers[i].text;
  //     opt2.textContent = quizQuestions[questionIndex].answers[i].text;
  //     opt3.textContent = quizQuestions[questionIndex].answers[i].text;
  //     opt4.textContent = quizQuestions[questionIndex].answers[i].text;

  // }}
  answersButton.innerHTML = "";

  quizQuestions[questionIndex].answers.forEach(function (answer) {
    var opt = document.createElement("button");
    opt.textContent = answer.text;
    opt.setAttribute("id", "opt");
    opt.setAttribute("value", answer.isCorrect);
    opt.onclick = testCheckAnswer;
    answersButton.append(opt);
  });

  // questionLine.textContent = quizQuestions[questionIndex].question;
  // opt1.textContent = quizQuestions[questionIndex].answers[0].text;
  // opt2.textContent = quizQuestions[questionIndex].answers[1].text;
  // opt3.textContent = quizQuestions[questionIndex].answers[2].text;
  // opt4.textContent = quizQuestions[questionIndex].answers[3].text;
  console.log(quizQuestions[questionIndex].answers[0]);

  // checkAnswer()
}

function testCheckAnswer() {
  if (this.value === "true") {
    console.log("correct");
    currentScore = currentScore + 1;
    console.log(currentScore);
    score.textContent = currentScore;
  } else {
    console.log("incorrect");
    secondsLeft -= 5;
    timerEl.textContent = secondsLeft;
  }
  questionIndex++;
  if (questionIndex === 10) {
    clearInterval(timerInterval);
    endGame()
    window.location.href = "scores.html";
    scoreDisplay.textContent = currentScore;
  } else {
    currentQuestion();
  }
}


function checkAnswer() {
  opt1.addEventListener("click", function () {
    if (quizQuestions[questionIndex].answers[0].isCorrect === true) {
      currentScore++;
      score.textContent = currentScore;
      // questionIndex++;
      // currentQuestion()
    } else {
      secondsLeft -= 5;
      timerEl.textContent = secondsLeft;
      // questionIndex++;
      // currentQuestion();
    }
    questionIndex++;
    currentQuestion();
  });
  opt2.addEventListener("click", function () {
    if (quizQuestions[questionIndex].answers[1].isCorrect === true) {
      currentScore++;
      score.textContent = currentScore;
      // questionIndex++;
      // currentQuestion()
    } else {
      secondsLeft -= 5;
      timerEl.textContent = secondsLeft;
      // questionIndex++;
      // currentQuestion();
    }
    questionIndex++;
    currentQuestion();
  });
  opt3.addEventListener("click", function () {
    if (quizQuestions[questionIndex].answers[2].isCorrect === true) {
      currentScore++;
      score.textContent = currentScore;
      // questionIndex++;
      // currentQuestion()
    } else {
      secondsLeft -= 5;
      timerEl.textContent = secondsLeft;
      // questionIndex++;
      // currentQuestion();
    }
    questionIndex++;
    currentQuestion();
  });
  opt4.addEventListener("click", function () {
    if (quizQuestions[questionIndex].answers[3].isCorrect === true) {
      currentScore++;
      score.textContent = currentScore;
      // questionIndex++;
      // currentQuestion()
    } else {
      secondsLeft -= 5;
      timerEl.textContent = secondsLeft;
      // questionIndex++;
      // currentQuestion();
    }
    questionIndex++;
    currentQuestion();
  });
}

currentQuestion();

function endGame() {
  var playerName = prompt("Please enter your intials to save your score!");
  var leaderboard = {
    name: playerName,
    score: currentScore,
  };
  playerScore.push(leaderboard);
  localStorage.setItem("playerScore", JSON.stringify(playerScore));
}
endGame()