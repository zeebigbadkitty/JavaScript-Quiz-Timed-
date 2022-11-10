//Local Storage
var playerScore = JSON.parse(localStorage.getItem("playerScore")) || [];
var highScores = document.querySelector('#highscores')


//Endgame function


  for(let i=0; i < playerScore.length; i++){
    let li = document.createElement('li')
    li.textContent=playerScore[i].name+ " -- " +playerScore[i].score
    highScores.append(li)

  }