

const myArray = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return myArray[~~(Math.random() * myArray.length)]
}




function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();

    if (computerSelection === playerSelection) {
        console.log("TIE")
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        console.log("YOU LOSE")
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        console.log("YOU WIN")
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        console.log("YOU LOSE")
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));