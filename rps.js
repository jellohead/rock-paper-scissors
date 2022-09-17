/* rock paper scissors javascript file */

// rock > scissors
// paper > rock
// scissors > paper

console.log("Hello, world!");

const myArray = ["rock", "paper", "scissors"];

// function computerSelection() {
//     console.log("in the computerSelection function");
//     let computerChoice = myArray[Math.floor(Math.random() * myArray.length)];
//     console.log("computerChoice = " + computerChoice);
//     return computerChoice;
// }

// converted computerSelection to arrow function
computerSelection = () => {
    console.log("in the computerSelection function");
    let computerChoice = myArray[Math.floor(Math.random() * myArray.length)];
    console.log("computerChoice = " + computerChoice);
    return computerChoice;
}

playerSelection = () => {
    console.log("in the playerSelection function");
    let playerChoice = prompt("Enter rock, paper, or scissors");
    playerChoice = playerChoice.toLowerCase();
    console.log("playerChoice = " + playerChoice);
    return playerChoice;
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

game = () => {
    /* call playRound() here and play a 
 game that keeps score and reports a winner or loser
    at the end */
    console.log("in the game function");

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // add code to play a round once button is clicked

            console.log(button.id); //logs which button is clicked
            console.log(typeof button.id);

            return button.id;
        });
    });



    console.log("Game result is " + playRound(playerSelection(button.id), computerSelection()));
}



// let playerSelection = "rock";
// console.log(playerSelection());
// console.log(computerSelection());


console.log(game());