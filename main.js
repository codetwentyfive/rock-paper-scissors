
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerPlay().toLowerCase();
    if (computerSelection === playerSelection) {
        displayResults("TIE")
    } else if (computerSelection = 'rock' && playerSelection= 'scissors') {
        displayResults("YOU LOSE")
    } else if (computerSelection = 'paper' && playerSelection= 'stone') {
        displayResults("YOU WIN")
    } else if (computerSelection = 'scissors' && playerSelection= 'paper') {
        displayResults("YOU LOSE")
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));