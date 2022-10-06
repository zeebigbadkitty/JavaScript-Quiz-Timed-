/*AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question inanswersly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/

//I need to learn to shuffle the questions.
var randomQuestion = shuffle(questions)
var currentQuestion

questionEl = document.getElementById('question-line')
answerButtonEl = document.getElementsByClassName('button')


var questions = [
    {question:'1.	What are JavaScript Data types?',
    answers:[
        {text:'Numbers', answers:false}
        {text:'Strings', answers:false}
        {text:'Boolean', answers:false}
        {text:'All of the Above', answers:true}]
}
]
var questions = [
    {question:'2.	What company developed JavaScript? ',
    answers:[
        {text:'IBM', answers:false}
        {text:'Oracle', answers:false}
        {text:'Netscape', answers:true}
        {text:'Microsoft', answers:false}]
}
]
var questions = [
    {question:'3.	What symbols are used to denote comments in JavaScript? ',
    answers:[
        {text:'/', answers:true}
        {text:'$', answers:false}
        {text:'*', answers:false}
        {text:';', answers:false}]
}
]
var questions = [
    {question:'4.	What function is used to make conversions? ',
    answers:[
        {text:'Type', answers:false}
        {text:'Convert', answers:false}
        {text:'Log', answers:false}
        {text:'Parse', answers:true}]
}
]
var questions = [
    {question:'5.	Which of the follow is not a valid variable name in JavaScript?',
    answers:[
        {text:'2headers', answers:true}
        {text:'_first_header', answers:false}   
        {text:'MyHeader', answers:false}
        {text:'$myList', answers:false}]
}
]
var questions = [
    {question:'6.	Select the HTML tag that is used to link JavaScript files. ',
    answers:[
        {text:'<href>', answers:false}
        {text:'<link>', answers:false}
        {text:'<!DOCTYPE>', answers:false}
        {text:'<script>', answers:true}]
}
]
var questions = [
    {question:'7.	Using these types of statements is how you test for a specific condition.',
    answers:[
        {text:'for', answers:false}
        {text:'if', answers:true}
        {text:'switch', answers:false}
        {text:'log', answers:false}]
}
]
var questions = [
    {question:'8.	The following method of an array adds and/or removes elements from an array.',
    answers:[
        {text:'Join', answers:false}
        {text:'Shift', answers:false}
        {text:'Concat', answers:false}
        {text:'Splice', answers:true}]
}
]
var questions = [
    {question:'9.	What does the acronym JSON stand for?',
    answers:[
        {text:'Java Standard Output Network', answers:false}
        {text:'JavaScript Object Notation', answers:true}
        {text:'JavaScript Output Name', answers:false}
        {text:'Java Source Open Network', answers:false}]
}
]
var questions = [
    {question:'10.	What is the output of the following function?\nvar num = 8;\nvar num = 10;\nconsole.log(num);',
    answers:[
        {text:'8', answers:false}
        {text:'2', answers:false}
        {text:'80', answers:false}
        {text:'10', answers:true}]
}
]
var questions = [
    {question:'What does the keyword “this” mean in JavaScript?',
    answers:[
        {text:'It is a variable that contains a value', answers:false}
        {text:'It references the document', answers:false}
        {text:'It refers to the current object', answers:true}
        {text:'None of the above. ', answers:false}]
}
]


function startGame() { //This function starts the game, ending with the next question populating.
randomQuestion = questions.sort(() => Math.random() - 0.5)  //To generate a random question.
questionEl.inn
nextQuestion()

}
function answerSelection(){ //This function

}
function nextQuestion(){

}

//Score
for (var i=0; i<questions.length; i++){
//Finish the For loop
if (answers === true)
//Finish the if statement
}
//Timer
//Start Button
//See Scores Button
//High Score