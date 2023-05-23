const myArray = ['rock', 'paper', 'scissors'];

const rockButton = document.getElementById("rock-btn");
rockButton.addEventListener("click", () => {
    if (!gameEnded) {
        playRound("rock");
    }
});

const paperButton = document.getElementById("paper-btn");
paperButton.addEventListener("click", () => {
    if (!gameEnded) {
        playRound("paper");
    }
});

const scissorsButton = document.getElementById("scissors-btn");
scissorsButton.addEventListener("click", () => {
    if (!gameEnded) {
        playRound("scissors");
    }
});

const results = document.getElementById("results");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const replayButton = document.getElementById("replay-btn");

let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

function getComputerChoice() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        results.textContent = "It's a tie! Both chose " + playerSelection;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        results.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else {
        results.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        computerScore++;
    }
    results.innerHTML = `
    <p>Computer chose: ${computerSelection}</p>
    <p>${results.textContent}</p>
`;

    updateScoreboard();
    checkGameEnd();
}

function updateScoreboard() {
    playerScoreDisplay.textContent = "Player: " + playerScore;
    computerScoreDisplay.textContent = "Computer: " + computerScore;
}

function checkGameEnd() {
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            results.textContent += "\nYou won the game! Glorious!";
        } else if (playerScore < computerScore) {
            results.textContent += "\nYou lost the game youngling. Better luck next time!";
        } else {
            results.textContent += "\nTIED!";
        }

        // Disable the buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        gameEnded = true;

        // Enable the replay button
        replayButton.disabled = false;
    }
}

function replayGame() {
    playerScore = 0;
    computerScore = 0;
    results.textContent = "";
    updateScoreboard();

    // Enable the buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    gameEnded = false;

    // Disable the replay button
    replayButton.disabled = true;
}

replayButton.addEventListener("click", replayGame);
