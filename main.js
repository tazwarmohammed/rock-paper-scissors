const choices = ["Rock", "Scissors", "Paper"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Draw!";
    } else if(playerSelection.toLowerCase() === "rock") {
        if(computerSelection.toLowerCase() === "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if(playerSelection.toLowerCase() === "paper") {
        if(computerSelection.toLowerCase() === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "You Win! Paper beats Rock";
        }
    } else if(playerSelection.toLowerCase() === "scissors") {
        if(computerSelection.toLowerCase() === "rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    } else {
        return "Please enter correctly"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice....");
        const computerSelection = getComputerChoice();
        console.log("Me ==> " + playerSelection.toLowerCase());
        console.log("Computer ==> " + computerSelection.toLowerCase());
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();