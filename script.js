function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"]; // note to self: mind the brackets [] for math
    let computerSelection = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    //console.log(computerSelection);
    return(computerSelection); 
}

let computerSelection = computerPlay();
let playerSelection = window.prompt("What will you throw at R2-D2?");
let playerScore = parseInt(0);  
let computerScore = parseInt(0);

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) { 
        return("your objects collided mid-air, it's a tie");   
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        ++computerScore;
        return("You lose! R2-D2 had some rock-eating paper apparently. The score is now " + playerScore + " for you and " + computerScore + " for R2D2 ");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        ++playerScore;
        return("You win! Those scissors stood no chance against your mighty rock. The score is now " + playerScore + " for you and " + computerScore + " for R2D2 ");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        ++playerScore;
        return("You win! This paper must have come from Uranus, it entirely blocked R2-D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2D2 ");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        ++computerScore;
        return("R2-D2 whips out his Swiss army knife and cuts your paper to pieces. Obvious loss. The score is now " + playerScore + " for you and " + computerScore + " for R2D2 ");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        ++computerScore;
        return("You lose! Those blades got pretty roughed up by R2D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2D2 ");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        ++playerScore;
        return("You win! you cut R2's pathetic little piece of paper into world's most tiny violin and threw it back. The score is now " + playerScore + " for you and " + computerScore + " for R2D2 ");
    }
}

console.log(playRound(playerSelection, computerSelection));

function game() {
    
}
