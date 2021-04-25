


function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"]; // note to self: mind the brackets [] for math
    let computerSelection = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    console.log("computer chose " + computerSelection);
    return(computerSelection);
    
}

let computerSelection = computerPlay();
    let playerSelection = "rock";

function playRound() {
    if (playerSelection === computerSelection) { 
        return("it's a tie");   
    } else if (playerSelection !== computerSelection) {
    return("bumbum");
}
}



console.log(playRound(playerSelection, computerSelection));

//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection - 
//and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation)