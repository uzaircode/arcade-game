'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 10;
let highscore = 0;

let initialMessage = document.querySelector('.message').textContent;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#5AAB2B';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    document.querySelector('.score').textContent = --score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    document.querySelector('.score').textContent = --score;
  }

  if (score <= 0) {
    document.querySelector('.message').textContent = 'You lose the game! ';
    document.querySelector('body').style.backgroundColor = '#AB2328';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector('.message').textContent = initialMessage;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  console.log(secretNumber);
});
