//STARTING TIME AND SCORE//
var score = 0
var time = 250

var questionEl = document.querySelector('#question-line') 
var answersEl = document.querySelector('#answer-btns')
var timerEl = document.querySelector('.timer')
var scoreEl = document.querySelector('.score')


 // QUESTIONS AND ANSWERS //
var questions = [
    {question:'1.	What are JavaScript Data types?',
    answers:[
        {text:'Numbers', answers:false}
        {text:'Strings', answers:false}
        {text:'Boolean', answers:false}
        {text:'All of the Above', answers:true}]
}
    {question:'2.	What company developed JavaScript? ',
    answers:[
        {text:'IBM', answers:false}
        {text:'Oracle', answers:false}
        {text:'Netscape', answers:true}
        {text:'Microsoft', answers:false}]
}
    {question:'3.	What symbols are used to denote comments in JavaScript? ',
    answers:[
        {text:'/', answers:true}
        {text:'$', answers:false}
        {text:'*', answers:false}
        {text:';', answers:false}]
}
    {question:'4.	What function is used to make conversions? ',
    answers:[
        {text:'Type', answers:false}
        {text:'Convert', answers:false}
        {text:'Log', answers:false}
        {text:'Parse', answers:true}]
}
    {question:'5.	Which of the follow is not a valid variable name in JavaScript?',
    answers:[
        {text:'2headers', answers:true}
        {text:'_first_header', answers:false}   
        {text:'MyHeader', answers:false}
        {text:'$myList', answers:false}]
}
    {question:'6.	Select the HTML tag that is used to link JavaScript files. ',
    answers:[
        {text:'<href>', answers:false}
        {text:'<link>', answers:false}
        {text:'<!DOCTYPE>', answers:false}
        {text:'<script>', answers:true}]
}
    {question:'7.	Using these types of statements is how you test for a specific condition.',
    answers:[
        {text:'for', answers:false}
        {text:'if', answers:true}
        {text:'switch', answers:false}
        {text:'log', answers:false}]
}
    {question:'8.	The following method of an array adds and/or removes elements from an array.',
    answers:[
        {text:'Join', answers:false}
        {text:'Shift', answers:false}
        {text:'Concat', answers:false}
        {text:'Splice', answers:true}]
}
    {question:'9.	What does the acronym JSON stand for?',
    answers:[
        {text:'Java Standard Output Network', answers:false}
        {text:'JavaScript Object Notation', answers:true}
        {text:'JavaScript Output Name', answers:false}
        {text:'Java Source Open Network', answers:false}]
}
    {question:'10.	What is the output of the following function?\nvar num = 8;\nvar num = 10;\nconsole.log(num);',
    answers:[
        {text:'8', answers:false}
        {text:'2', answers:false}
        {text:'80', answers:false}
        {text:'10', answers:true}]
}
    {question:'What does the keyword “this” mean in JavaScript?',
    answers:[
        {text:'It is a variable that contains a value', answers:false}
        {text:'It references the document', answers:false}
        {text:'It refers to the current object', answers:true}
        {text:'None of the above. ', answers:false}]
}]

// GAME FUNCTIONS //



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
for (var i=0; i<questions.length; i++){ //Finish the For loop

if (answers === true) //Finish the if statement

}
//Timer (When time runs out or all questions are answered)
//Saving your highscore (Prompt - save to local storage)
//High Score display