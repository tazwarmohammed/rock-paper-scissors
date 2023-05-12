const choices = ["Rock", "Scissors", "Paper"];
let myScore = 0, computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Draw!";
    } else if(playerSelection.toLowerCase() === "rock") {
        if(computerSelection.toLowerCase() === "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else {
            myScore++;
            return "You Win! Rock beats Scissors";
        }
    } else if(playerSelection.toLowerCase() === "paper") {
        if(computerSelection.toLowerCase() === "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        } else {
            myScore++;
            return "You Win! Paper beats Rock";
        }
    } else {
        if(computerSelection.toLowerCase() === "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        } else {
            myScore++;
            return "You Win! Scissors beats Paper";
        }
    }
}

function game(e) {
    document.querySelector('.startGame').innerText = 'Press Rock, Paper or Scissors to make a move';
    const playerSelection = e.target.innerText;
    const computerSelection = getComputerChoice();
    document.querySelector('.playerMove').innerText = e.target.innerText;
    document.querySelector('.enemyMove').innerText = computerSelection;

    document.querySelector('.roundResult').innerText = playRound(playerSelection, computerSelection);
    document.querySelector('.playerScore').innerText = myScore;
    document.querySelector('.enemyScore').innerText = computerScore;
    if(myScore === 5) {
        document.querySelector('.seriesResult').innerText = 'You won the series!';
        document.querySelectorAll('.play').forEach((button) => {
            button.removeEventListener('click', game);
        });
        // document.querySelector('.paper').removeEventListener('click', game);
        // document.querySelector('.scissors').removeEventListener('click', game);
    } else if(computerScore === 5) {
        document.querySelector('.seriesResult').innerText = 'You lost the series!';
        document.querySelectorAll('.play').forEach((button) => {
            button.removeEventListener('click', game);
        });
        // document.querySelector('.paper').removeEventListener('click', game);
        // document.querySelector('.scissors').removeEventListener('click', game);
    }
}

function resetAll() {
    myScore = 0, computerScore = 0;
    document.querySelector('.playerScore').innerText = myScore;
    document.querySelector('.enemyScore').innerText = computerScore;
    document.querySelector('.startGame').innerText = 'Press any of the buttons to start playing against computer. First one to win 5 rounds takes the series!';
    document.querySelector('.playerMove').innerText = '';
    document.querySelector('.enemyMove').innerText = '';
    document.querySelector('.seriesResult').innerText = '';
    document.querySelector('.roundResult').innerText = '';
    document.querySelectorAll('.play').forEach((button) => {
        button.addEventListener('click', game);
    });
}


document.querySelectorAll('.play').forEach((button) => {
    button.addEventListener('click', game);
});
document.querySelector('.reset').addEventListener('click', resetAll);