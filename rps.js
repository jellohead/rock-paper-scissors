/* rock paper scissors javascript file */

console.log("Hello, world!");

const myArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = myArray[Math.floor(Math.random() * myArray.length)];
    return computerChoice;
}

console.log(getComputerChoice());