'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

qs('.check').addEventListener('click', () => {
  const guess = Number(qs('.guess').value);

  if (!guess) {
    displayMessage('No number!');

    return;
  }

  compareGuessToSecretNumber(guess, secretNumber);
});

function compareGuessToSecretNumber(guess, secretNumber) {
  validateScore(score, guess, secretNumber);

  if (guess === secretNumber) {
    qs('.number').style.width = '30rem';
    qs('.number').textContent = secretNumber;

    displayMessage('Correct Number!');

    qs('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      qs('.highscore').textContent = highscore;
    }
  }
}

function validateScore(score, guess, secretNumber) {
  if (score > 1) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    qs('.score').textContent = score;
    score--;
  } else {
    displayMessage('You lost the game');
    qs('.score').textContent = 0;
  }
}

qs('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  qs('.number').textContent = '?';
  qs('.score').textContent = score;
  qs('.guess').value = '';

  qs('.number').style.width = '15rem';
  qs('body').style.backgroundColor = '#222';
});

function displayMessage(message) {
  qs('.message').textContent = message;
}
