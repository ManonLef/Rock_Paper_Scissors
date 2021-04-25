//Your game is going to play against the computer, so begin with a function called computerPlay 
//that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. 
//Tip: use the console to make sure this is returning the expected output before moving to the next step!

function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"]; // note to self: mind the brackets [] for math
    let compRandom = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    console.log (compRandom);
}

computerPlay();

//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection - 
//and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).