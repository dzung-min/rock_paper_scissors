function playRound(playerSelection, computerSelection) {
  'use strict';
  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        return 'Draw';
      case 'paper':
        return "You Lose! Paper beats Rock";
      case 'scissors':
        return "You Win! Rock beats Scissors";
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'paper':
        return 'Draw';
      case 'rock':
        return "You Win! Paper beats Rock";
      case 'scissors':
        return "You Lose! Scissors beats Paper";
    }
  } else if (playerSelection === 'scissors') {
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


const container = document.querySelector('#container');
const btnList = document.querySelectorAll('.playerChoice');
const roundResult = document.querySelector('#round-result');
const score = document.querySelector('#score');
const finalResult = document.querySelector('#final-result');
const resetBtn = document.querySelector('#reset-btn');

let playerSelection = 0,
  playerScore = 0,
  computerSelection = 0,
  computerScore = 0,
  result = 0;
score.textContent = `${playerScore} - ${computerScore}`;
roundResult.textContent = 'Make your choice!';

btnList.forEach(btn => {
  btn.addEventListener('click', () => {
    playerSelection = btn.value;
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);

    if (result.indexOf('Win') !== -1) playerScore++;
    else if (result.indexOf('Lose') !== -1) computerScore++;

    score.textContent = `${playerScore} - ${computerScore}`;
    roundResult.textContent = result;

    if (playerScore === 5 || computerScore === 5) {
      finalResult.textContent = playerScore === 5 ? 'You win!' : 'You lose!';
      btnList.forEach(btn => {
        btn.setAttribute('disabled', 'true');
      })
    }
    resetBtn.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      btnList.forEach(btn => {
        btn.removeAttribute('disabled');
      })
      score.textContent = `${playerScore} - ${computerScore}`;
      roundResult.textContent = 'Make your choice!';
      finalResult.textContent = '';
    })
  })
})