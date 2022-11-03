let playerScore = 0;
let computerScore = 0;
let roundWinner = ''

const myArray = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return myArray[~~(Math.random() * myArray.length)]
}



function game() {

    function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice().toLowerCase();

        if (computerSelection === playerSelection) {
            console.log("TIE")
        } if (computerSelection == 'rock' && playerSelection == 'scissors') ||
            (computerSelection == 'paper' && playerSelection == 'rock') ||
            (computerSelection == 'scissors' && playerSelection == 'paper') {
            computerScore++
        }

    }
}

// UI
let playerSelection = prompt("Whats your Choice")