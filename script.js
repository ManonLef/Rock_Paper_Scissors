let playerScore = 0;  
let computerScore = 0;
let rounds = 1;

function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"]; // note to self: mind the brackets [] for math
    let computerSelection = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    return(computerSelection);
}

function game() {
    let computerSelection = computerPlay();
    let playerSelection = prompt("What will you throw at R2-D2? Just type: rock, paper or scissors");
    console.log(playRound(playerSelection, computerSelection));
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors") {
    
            rounds ++

            if (playerSelection.toLowerCase() === computerSelection) { 
                computerScore++;
                return("your objects collided mid-air, it's a tie. " + playerScore + " for you and " + computerScore + " for R2-D2.");   
            } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
                computerScore++;
                return("You lose! R2-D2 had some rock-eating paper apparently. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
            } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
                playerScore++;
                return("You win! Those scissors stood no chance against your mighty rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
            } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
                playerScore++;
                return("You win! This paper must have come from Uranus, it entirely blocked R2-D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
            } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
                computerScore++;
                return("R2-D2 whips out his Swiss army knife and cuts your paper to pieces. Obvious loss. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
            } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
                computerScore++;
                return("You lose! Those blades got pretty roughed up by R2D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
            } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
                playerScore++;
                return("You win! you cut R2's pathetic little piece of paper into world's most tiny violin and threw it back. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
            }
        } else {
            return("you can only throw a rock, paper or scissors at this time.");
        }
}

function endGame() {
    if (computerScore > playerScore) {
        return("* GAME OVER * YOU LOSE! You got pulverized by a cute robot.")
    } else {
        return("* GAME OVER * YOU WIN! But beware of the sequel. Return of the astromech droids. You read that right... DroidS")
    }
}

function loopGame() {
    do {
        console.log(" Get ready for Round " + rounds);
        game();
    }
    while (rounds < 6);

    const score = endGame();
    console.log(score);
}

window.alert("Open your console and refresh if you want to play a few rounds of Rock, Paper Scissors against an astromech droid. (hit cancel on the first round before you refresh)");
loopGame();







