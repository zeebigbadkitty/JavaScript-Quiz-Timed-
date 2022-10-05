/*AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/

//I need to learn to shuffle the questions.
var randomQuestion = shuffle(questions)
var currentQuestion

var questions = [
    {question:'1.	What are JavaScript Data types?'
    answers:[
        {text:'Numbers', correct:false}
        {text:'Strings', correct:false}
        {text:'Boolean', correct:false}
        {text:'All of the Above', correct:true}]
}
]
var questions = [
    {question:'2.	What company developed JavaScript? '
    answers:[
        {text:'IBM', correct:false}
        {text:'Oracle', correct:false}
        {text:'Netscape', correct:true}
        {text:'Microsoft', correct:false}]
}
]
var questions = [
    {question:'3.	What symbols are used to denote comments in JavaScript? '
    answers:[
        {text:'/', correct:true}
        {text:'$', correct:false}
        {text:'*', correct:false}
        {text:';', correct:false}]
}
]
var questions = [
    {question:'4.	What function is used to make conversions? '
    answers:[
        {text:'Type', correct:false}
        {text:'Convert', correct:false}
        {text:'Log', correct:false}
        {text:'Parse', correct:true}]
}
]
var questions = [
    {question:'5.	Which of the follow is not a valid variable name in JavaScript?'
    answers:[
        {text:'2headers', correct:true}
        {text:'_first_header', correct:false}   
        {text:'MyHeader', correct:false}
        {text:'$myList', correct:false}]
}
]
var questions = [
    {question:'6.	Select the HTML tag that is used to link JavaScript files. '
    answers:[
        {text:'<href>', correct:false}
        {text:'<link>', correct:false}
        {text:'<!DOCTYPE>', correct:false}
        {text:'<script>', correct:true}]
}
]
var questions = [
    {question:'7.	Using these types of statements is how you test for a specific condition.'
    answers:[
        {text:'', correct:}
        {text:'', correct:}
        {text:'', correct:}
        {text:'', correct:}]
}
]
var questions = [
    {question:'8.	The following method of an array adds and/or removes elements from an array.'
    answers:[
        {text:'', correct:}
        {text:'', correct:}
        {text:'', correct:}
        {text:'', correct:}]
}
]
var questions = [
    {question:'9.	What does the acronym JSON stand for?'
    answers:[
        {text:'', correct:}
        {text:'', correct:}
        {text:'', correct:}
        {text:'', correct:}]
}
]
var questions = [
    {question:'10.	What is the output of the following function?\nvar num = 8;\nvar num = 10;\nconsole.log(num);'
    answers:[
        {text:'', correct:}
        {text:'', correct:}
        {text:'', correct:}
        {text:'', correct:}]
}
]
var questions = [
    {question:'What does the keyword “this” mean in JavaScript?'
    answers:[
        {text:'', correct:}
        {text:'', correct:}
        {text:'', correct:}
        {text:'', correct:}]
}
]


function startGame() { //This function starts the game, ending with the next question populating.
randomQuestion = questions.sort()
nextQuestion()

}
function selection(){

}
function nextQuestion(){

}