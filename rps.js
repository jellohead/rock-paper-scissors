/* rock paper scissors javascript file */

// rock > scissors
// paper > rock
// scissors > paper

console.log("Hello, world!");

const myArray = ["rock", "paper", "scissors"];

function computerSelection() {
    console.log("in the computerSelection function");
    let computerChoice = myArray[Math.floor(Math.random() * myArray.length)];
    console.log(computerChoice);
    return computerChoice;
}

function playerSelection() {
    let playerChoice = prompt("Enter rock, paper, or scissors", "rock, paper, or scissors");
    console.log(playerChoice);
    return playerChoice;
}


function playRound(playerChoice, computerChoice) {
    console.log("in the playRound function");
    let gameResult;
    // player enters choice for round

    // handle a tie game
    if (playerSelection == computerSelection) {
        gameResult = "tie";
        console.log("game is a tie");
        return gameResult;
    }
    // handle all other cases
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "scissors") {
                gameResult = "win";
            } else {
                gameResult = "lost"
            }
            return gameResult;
        case "paper":
            if (computerSelection == "rock") {
                gameResult = "win";
            } else {
                gameResult = "lost"
            }
            return gameResult;
        case "scissors":
            if (computerSelection == "paper") {
                gameResult = "win";
            } else {
                gameResult = "lost"
            }
            return gameResult;
    }
}

function game() {
    /* call playRound() here and play a 
    5 round game that keeps score and reports a winner or loser
    at the end */
    let i = 0;
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        console.log(i);
        console.log("Game result is " + playRound(playerSelection(), computerSelection()));
    }

}



// let playerSelection = "rock";
console.log(game());