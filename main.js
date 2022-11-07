let playerScore = 0
let computerScore = 0
let roundWinner = ("")

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        console.log("rock")  
        return 'rock'
      case 1:
        console.log("paper")  
        return 'paper'
      case 2:
        console.log("scissors")  
        return 'scissors' 
    }
}

function playerSelection () {
    var x = document.getElementById("playerInput").value;
    
}



computerSelection = getComputerChoice()


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
       return console.log ("ITSA TIE")
    } else { return console.log("fuck me")}
  }

 
 


