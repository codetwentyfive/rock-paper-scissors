
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const buttons=document.querySelectorAll('input')

const myArray = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return myArray[~~(Math.random() * myArray.length)]
}
function playerSelection() { prompt("Whats your selection") }
playerSelection=window.prompt();



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
            return ("You Lose aginst the A.I Machine!")

            if (computerScore==5) {
                roundWinner ("You got cucked by a dildo")
            }

        }

        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
            playerScore++
            roundWinner = 'player'
            return ("You Win!")

            if (playerScore==5) {
                roundWinner ("You saved the virgin and got laid!")
            }

            
        }
    } 
    playerSelection
console.log(playRound)

} 

    
game