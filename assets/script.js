//STARTING VARIABLES//
var questionLine = document.getElementById("question-line");
var startBtn = document.getElementById("start-btn");
var scoresBtn = document.getElementById("scores-btn");
var currentScore = document.getElementById("current-score");
var answersButton = document.getElementById("answer-btns");
var opt1 = document.querySelector("#opt1"); 
var opt2 = document.querySelector("#opt2"); 
var opt3 = document.querySelector("#opt3"); 
var opt4 = document.querySelector("#opt4"); 


//TIMER//
var timerEl = document.querySelector("#timer");
var secondsLeft = 90;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
setTime(); 

//START GAME AND TIMER
var startingScore = 0;
var startingTime = 300;

// QUESTIONS AND ANSWERS ARRAY//
var quizQuestions = [{
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
var questionIndex = 0

function currentQuestion() {
  // for(var i = 0; i<=quizQuestions.length; i++){
    questionLine.textContent = quizQuestions[questionIndex].question; 
    opt1.textContent = quizQuestions[questionIndex].answers[0].text; 
    opt2.textContent = quizQuestions[questionIndex].answers[1].text; 
    opt3.textContent = quizQuestions[questionIndex].answers[2].text; 
    opt4.textContent = quizQuestions[questionIndex].answers[3].text; 
  //   opt1[i].textContent = quizQuestions[questionIndex].answers[i].text; 
  //   console.log(opt1[i].textContent = quizQuestions[questionIndex].answers[i].text)
  // answers[i].addEventListener('click',function() 
    opt1.addEventListener('click',function() {
      if(quizQuestions[questionIndex].answers[0].isCorrect === false){
        console.log('correct')
        console.log(quizQuestions[questionIndex])
      }
      questionIndex++
      currentQuestion();
    })
    opt2.addEventListener('click',function() {
      if(quizQuestions[questionIndex].answers[1].isCorrect === true){
        console.log('correct')
        
      }
      questionIndex++
      currentQuestion();
    })
    opt3.addEventListener('click',function() {
      if(quizQuestions[questionIndex].answers[2].isCorrect === true){
        console.log('correct')
      }
      questionIndex++
      currentQuestion();
    })
    opt4.addEventListener('click',function() {
      if(quizQuestions[questionIndex].answers[3].isCorrect === true){
        console.log('correct')
      }
      questionIndex++
      currentQuestion();
    })
    // questionIndex = (questionIndex + 1)
    // }
    // currentQuestion();

  }

currentQuestion();



//CHECK ANSWERS



//ADD TO SCORE OR SUBTRACT TIME FOR WRONG ANSWER

//TIME RUNS OUT, GAME IS OVER

//SAVING A HIGH SCORE VIA A FORM/PROMPT

//HIGH SCORE LEADERBOARD
