var messages = document.getElementById("message")
var results = document.getElementById("result")
var final = document.getElementById("game-result")

var playerScore=0;
var computerScore=0;
var rounds=0;

var playerSelection;
function stone(){
   playerSelection="Stone";
   checkWinner();
}
function paper(){
    playerSelection="Paper";
    checkWinner();
}
 function scissors(){
    playerSelection="Scissors";
    checkWinner();
 }
 function playagain(){
    messages.textContent="This is a best of 5 game";
    results.textContent="";
    final.textContent="";
    computerScore=0;
    playerScore=0;
    rounds=0;
    updateScoreTable();
 }

function checkWinner(){
    if(rounds<=4){
    rounds++;
    let computerSelection = Math.random();
    if (computerSelection < .34){
        computerSelection = "Stone";
    } else if (computerSelection <= .67){
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
if(playerSelection==="Stone"){
    if(computerSelection==="Paper"){
        messages.textContent="You have chosen stone and the Computer has chosen Paper";
        results.textContent="Computer won!";
        computerScore+=1;
    }
    else if(computerSelection==="Stone"){
        messages.textContent="Both, You and the Computer have chosen stone!"
        results.textContent="Its a tie!";
     }
    else{
        messages.textContent="You have chosen stone Computer has chosen scissors";
        results.textContent="You won!";
        playerScore+=1;
    }}
 else if(playerSelection==="Paper"){
    if(computerSelection==="Scissors"){
        messages.textContent="You have chosen paper and the Computer has chosen scissors";
        results.textContent="Computer won!";
        computerScore+=1;
     }
     else if(computerSelection==="Paper"){
        messages.textContent="Both, You and the Computer have chosen paper!"
        results.textContent="Its a tie!";
     }
        else{
            messages.textContent="You have chosen paper and the Computer has chosen stone ";
            results.textContent="You won!";
            playerScore+=1;
        }
}
else if(playerSelection==="Scissors"){
    if(computerSelection==="Stone"){
        messages.textContent="You have chosen scissors and the Computer has chosen stone ";
        results.textContent="Computer has won!";
        computerScore+=1;
    }
    else if(computerSelection==="Scissors"){
        messages.textContent="Both, You and the Computer have chosen scissors!"
        results.textContent="Its a tie!";
     }
    else{
        messages.textContent="You have chosen scissors and the Computer has chosen paper";
        results.textContent="Player has won!";
        playerScore+=1;
    }}}
    if(rounds==5){
        if (playerScore > computerScore) {
            final.textContent = "You have won the game!";
            confetti();
        } else if (computerScore > playerScore) {
            final.textContent = "Computer wins the game!";
        } else {
            final.textContent = "The game has ended in a tie!";
        }
    document.getElementById("stone").removeEventListener("click", stone);
    document.getElementById("paper").removeEventListener("click", paper);
    document.getElementById("scissors").removeEventListener("click", scissors);

    }
updateScoreTable();
}
function updateScoreTable() {
    var playerScoreElement = document.getElementById("player-score");
    var computerScoreElement = document.getElementById("computer-score");

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}
