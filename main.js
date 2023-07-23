// score
let playerScore = 0;
let cpuScore = 0;

// show score
function updateScores() {
    let playerScoreElement = document.querySelector('.player-score');
    let cpuScoreElement = document.querySelector('.cpu-score');
    playerScoreElement.textContent = playerScore;
    cpuScoreElement.textContent = cpuScore;
}

// cpu random choice
function getCpuChoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let randomIndex = Math.floor(Math.random() * 3);
    let cpuChoice = choices[randomIndex];

    // background image for cpu
    let cpuBg = document.querySelector('.cpu-bg');
    cpuBg.style.backgroundImage = `url('./assets/${cpuChoice.toLowerCase()}.png')`;

    return cpuChoice;
}

// winner logic
function determineWinner(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'Rock' && cpuChoice === 'Scissor') ||
        (playerChoice === 'Scissor' && cpuChoice === 'Paper') ||
        (playerChoice === 'Paper' && cpuChoice === 'Rock')
    ) {
        playerScore++;
        return "You win!";
    } else {
        cpuScore++;
        return "CPU wins!";
    }
}

// reset
function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    updateScores();

    // reset background images
    let cpuBg = document.querySelector('.cpu-bg');
    let playerBg = document.querySelector('.player-bg');
    cpuBg.style.backgroundImage = '';
    playerBg.style.backgroundImage = '';
}

// user choice
function playGame(playerChoice) {
    let cpuChoice = getCpuChoice();
    let result = determineWinner(playerChoice, cpuChoice);
    updateScores();

    // background image for user
    let playerBg = document.querySelector('.player-bg');
    playerBg.style.backgroundImage = `url('./assets/${playerChoice.toLowerCase()}.png')`;

}

// button click logic
let buttons = document.querySelectorAll('.button:not([type="reset"])');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerChoice = button.textContent;
        playGame(playerChoice);
    });
});

// reset
document.querySelector('button[type="reset"]').addEventListener('click', () => {
    resetGame();
});

// clear score on page reload
updateScores();