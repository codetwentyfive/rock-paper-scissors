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
<<<<<<< HEAD
function playerSelection() {
    return prompt("Whats your selection?")
    alert (return)
}
=======

>>>>>>> 934cac598adc7e19661a47b91c06ce7da8c188a8

game();

computerSelection = getComputerChoice()


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
       return console.log ("ITSA TIE")
    } else { return console.log("fuck me")}
  }

 
 


<<<<<<< HEAD
        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
            playerScore++
            roundWinner = 'player'
        }
    }
    console.log(playerSelection);
}
=======
>>>>>>> 934cac598adc7e19661a47b91c06ce7da8c188a8
