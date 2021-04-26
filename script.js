function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"]; // note to self: mind the brackets [] for math
    let computerSelection = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    //console.log(computerSelection);
    return(computerSelection); 
}


let playerScore = parseInt(0);  
let computerScore = parseInt(0);
let rounds = parseInt(1);
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let computerSelection = computerPlay();
    let playerSelection = window.prompt("What will you throw at R2-D2?");

    if (rounds <= 5) {
        console.log(playRound(playerSelection, computerSelection));
    }  else
        console.log(endGame());
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === computerSelection) { 
        ++computerScore;
        ++rounds;
        console.log("your objects collided mid-air, it's a tie. " + playerScore + " for you and " + computerScore + " for R2D2.");   
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        ++computerScore;
        ++rounds;
        console.log("You lose! R2-D2 had some rock-eating paper apparently. The score is now " + playerScore + " for you and " + computerScore + " for R2D2.");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        ++playerScore;
        ++rounds;
        console.log("You win! Those scissors stood no chance against your mighty rock. The score is now " + playerScore + " for you and " + computerScore + " for R2D2.")
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        ++playerScore;
        ++rounds;
        console.log("You win! This paper must have come from Uranus, it entirely blocked R2-D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2D2.");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        ++computerScore;
        ++rounds;
        console.log("R2-D2 whips out his Swiss army knife and cuts your paper to pieces. Obvious loss. The score is now " + playerScore + " for you and " + computerScore + " for R2D2.");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        ++computerScore;
        ++rounds;
        console.log("You lose! Those blades got pretty roughed up by R2D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2D2.");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        ++playerScore;
        ++rounds;
        console.log("You win! you cut R2's pathetic little piece of paper into world's most tiny violin and threw it back. The score is now " + playerScore + " for you and " + computerScore + " for R2D2.");
    }
}

function endGame() {
    console.log("end game");
}

game();
game();
game();
game();
game();





