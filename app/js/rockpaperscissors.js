////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move;
}

function getComputerMove(move) {
    return move;
}

function getWinner (playerMove,computerMove) {

    var winner;

    if (playerMove === computerMove) {
        var winner = "tie"
    } else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            var winner = "player";
        } else {
            var winner = "computer";
        }
    }  else if (playerMove === "paper") {
        if (computerMove === "rock") {
            var winner = "player";
        } else {
            var winner = "computer";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            var winner = "player";
        } else {
            var winner = "computer";
        }
    }

    return winner;
}

var playerWins = 0;
var computerWins = 0;

function playToFive(play) {
    console.log("Let's play Rock, Paper, Scissors");
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    if (play === "player" && playerWins < 5) {
        playerWins += 1;
        playToFive(play);
    } else if (play === "computer" && computerWins < 5) {
        computerWins += 1;
        playToFive(play);
    }

    return ["Computer:", computerWins + " Player: ", playerWins];
}

var human = getPlayerMove(randomPlay());
console.log(human);
var comp = getComputerMove(randomPlay());
console.log(comp);

var play = getWinner(human, comp);

playToFive(play);


