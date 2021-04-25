function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"]; // note to self: mind the brackets [] for math
    let computerSelection = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    //console.log(computerSelection);
    return(computerSelection); 
}

let computerSelection = computerPlay();
let playerSelection = window.prompt("What will you throw at R2-D2?");

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) { 
        return("your objects collided mid-air, it's a tie");   
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return("You lose! R2-D2 had some rock-eating paper apparently");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return("You win! Those scissors stood no chance against your mighty rock.");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return("You win! This paper must have come from Uranus, it entirely blocked R2-D2's rock.");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return("R2-D2 whips out his Swiss army knife and cuts your paper to pieces. Obvious loss.");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return("You lose! Those blades got pretty roughed up by R2D2's rock.");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return("You win! you cut R2's pathetic little piece of paper into world's most tiny violin and threw it back.");
    }
}

console.log(playRound(playerSelection, computerSelection));

function game() {
    
}

//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection - 
//and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation)