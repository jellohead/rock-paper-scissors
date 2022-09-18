/* rock paper scissors javascript file */

// rock > scissors
// paper > rock
// scissors > paper

const myArray = ["rock", "paper", "scissors"];

computerSelection = () => {
    // console.log("in the computerSelection function");
    let computerChoice = myArray[Math.floor(Math.random() * myArray.length)];
    console.log("computerChoice = " + computerChoice);
    return computerChoice;
}

playRound = (playerChoice, computerChoice) => {
    console.log("in the playRound function");
    let gameResult;
    // player enters choice for round

    // handle a tie game
    if (playerChoice == computerChoice) {
        gameResult = "tie";
        console.log("game is a tie");
        return gameResult;
    }
    // handle all other cases
    switch (playerChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                gameResult = "won";
            } else {
                gameResult = "lost"
            }
            return gameResult;
        case "paper":
            if (computerChoice == "rock") {
                gameResult = "won";
            } else {
                gameResult = "lost"
            }
            console.log(gameResult)
            return gameResult;
        case "scissors":
            if (computerChoice == "paper") {
                gameResult = "won";
            } else {
                gameResult = "lost"
            }
            return gameResult;
    }
}

logToDiv = () => {
    let output = document.getElementById("output");
    output.innerHTML = "Hello log world";
}

let runningScorePlayer = 0,
    runningScoreComputer = 0,
    tieScore = 0,
    countGames = 0,
    gameNumber = 0,
    paragraph,
    text;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // add code to play a round once button is clicked
        countGames = ++countGames;
        // update gameCount div
        gameNumber = document.getElementById('gameCount');
        gameNumber.textContent = `Game count = ${countGames}`;

        console.log("countGames = " + countGames);
        console.log("playerSelction and button clicked = " + button.id); //logs which button is clicked
        // console.log(typeof button.id);
        playerSelection = button.id;

        gameResult = playRound(playerSelection, computerSelection());

        console.log("gameResult after play= " + gameResult);
        //running score
        switch (gameResult) {
            case "tie":
                tieScore = tieScore + 1;
                break;
            case "won":
                runningScorePlayer = runningScorePlayer + 1;
                break;
            case "lost":
                runningScoreComputer = runningScoreComputer + 1;
                break;
        }

        console.log("Running score: \n" + "Player = " + runningScorePlayer + "\nComputer = " + runningScoreComputer + "\nTie = " + tieScore);
        //running totals
        scorePlayer = document.getElementById('playerScore');
        scorePlayer.textContent = `Player score = ${runningScorePlayer}`;

        scoreComputer = document.getElementById('computerScore');
        scoreComputer.textContent = `Computer score = ${runningScoreComputer}`;

        scoreTie = document.getElementById('tieScore');
        scoreTie.textContent = `Tie score = ${tieScore}`;

        if (runningScorePlayer === 5) {
            gameOver = document.getElementById('results');
            gameOver.textContent = 'Game over! You won 5 games.';
            console.log("Completed 5 games");
        } else if (runningScoreComputer === 5) {
            gameOver = document.getElementById('results');
            gameOver.textContent = 'Game over! Computer won 5 games.';

        }
    });
});
