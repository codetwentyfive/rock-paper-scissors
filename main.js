const myArray = [
  'Rock',
  'Paper',
  'Scissors'
];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

let computerSelection;
let playerSelection;
let computerScore;
let playerScore;

const resultsDiv = document.getElementById('results');


function game() {
  computerScore = 0;
  playerScore = 0;
  for (let i = 0; i < 5; i++) {
    // We no longer need onUserInput() here since we're using buttons.
  }
  resultsDiv.textContent = declareWinner();
}

function declareWinner() {
  if (playerScore === computerScore) {
    return playerScore + '-' + computerScore + '\nTie game!';
  } else if (playerScore > computerScore) {
    return playerScore + '-' + computerScore + '\nYou win!!';
  } else {
    return playerScore + '-' + computerScore + '\nYou lost. Better luck next time!';
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  let result = '';
  
  if (computerSelection === playerSelection) {
    result = 'Tie game\nComputer: ' + computerSelection + '\nYou: ' + playerSelection;
  } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
  (computerSelection == 'scissors' && playerSelection == 'paper') ||
  (computerSelection == 'paper' && playerSelection == 'rock')) {
    result = 'Computer wins\nComputer: ' + computerSelection + '\nYou: ' + playerSelection;
    computerScore++;
  } else {
    result = 'You win\nComputer: ' + computerSelection + '\nYou: ' + playerSelection;
    playerScore++;
  }
  
  resultsDiv.textContent = result + '\n' + declareWinner();
   document.getElementById("playerScore").textContent='Player Score: ' +playerScore;
   document.getElementById("computerScore").textContent='Computer Score: ' +computerScore;
}

document.getElementById("replayButton").addEventListener('click', function(){
  resultsDiv.textContent="";
  computerScore=0;
  playerScore=0;})
  
  
  // Add event listeners for the buttons
  document.getElementById('rockButton').addEventListener('click', function () {
    playRound('rock', computerSelection);
  });
  
  document.getElementById('paperButton').addEventListener('click', function () {
    playRound('paper', computerSelection);
  });
  
  document.getElementById('scissorsButton').addEventListener('click', function () {
    playRound('scissors', computerSelection);
  });
  
  game();