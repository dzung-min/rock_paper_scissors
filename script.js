function playRound(playerSelection, computerSelection) {
  'use strict';
  if (playerSelection.toLowerCase() === 'rock') {
    switch (computerSelection) {
      case 'rock':
        return 'Draw';
      case 'paper':
        return "You Lose! Paper beats Rock";
      case 'scissors':
        return "You Win! Rock beats Scissors";
    }
  } else if (playerSelection.toLowerCase() === 'paper') {
    switch (computerSelection) {
      case 'paper':
        return 'Draw';
      case 'rock':
        return "You Win! Paper beats Rock";
      case 'scissors':
        return "You Lose! Scissors beats Paper";
    }
  } else if (playerSelection.toLowerCase() === 'scissors') {
    switch (computerSelection) {
      case 'scissors':
        return 'Draw';
      case 'paper':
        return "You Win! Scissors beats Paper";
      case 'rock':
        return "You Lose! Rock beats Scissors";
    }
  }
}

function computerPlay() {
  'use strict';
  let play = Math.floor(Math.random() * 3) + 1;
  switch (play) {
    case 1:
      return 'paper';
    case 2:
      return 'rock';
    case 3:
      return 'scissors';
  }
}

function game() {
  'use strict';
  let score = 0;
  let choices = ["rock", "paper", "scissors"];
  let playerSelection;
  for (let i = 0; i < 5; i++) {
    do {
      playerSelection = prompt("Enter your choice:").toLowerCase();
    } while (choices.indexOf(playerSelection) === -1);
    
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.indexOf('Win') !== -1) {
      score++;
    } else if (result.indexOf('Lose') !== -1) {
      score--;
    }
  }

  if (score > 0) {
    console.log("YOU WIN!");
    return;
  } else {
    console.log("COMPUTER WIN!");
    return;
  }
}

game();