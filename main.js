const myArray = ['rock', 'scissors', 'paper'];

function getComputerChoice() {
    return myArray[Math.floor((Math.random() * myArray.length))]
}

let playerSelection
let computerSelection

function userInput() {
    playerSelection = prompt("Whats your Choice?", '');
    if ((playerSelection.toLocaleLowerCase() == 'rock')
        || (playerSelection.toLocaleLowerCase() == 'paper')
        || (playerSelection.toLocaleLowerCase() == 'scissors')) {
        console.log(playRound(playerSelection, computerSelection));
    } else {
        alert("Wrong choice!");
        userInput();
    }


}


function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice;
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
        alert("TIE");
    } else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')
    ) {
        alert("You lose");
    } else (
        alert("You Win")
    )

}