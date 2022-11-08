
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


const myArray = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return myArray[~~(Math.random() * myArray.length)]
}
function playerSelection() {
    return prompt("Whats your selection?")
    alert (return)
}

game();

function game() {

    function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice().toLowerCase();
        playerSelection = playerSelection().toLowerCase();

        if (computerSelection === playerSelection) {
            console.log("TIE")

        }
        if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
            (computerSelection == 'paper' && playerSelection == 'rock') ||
            (computerSelection == 'scissors' && playerSelection == 'paper')) {
            computerScore++
            roundWinner = 'computer'
        }

        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
            playerScore++
            roundWinner = 'player'
        }
    }
    console.log(playerSelection);
}