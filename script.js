'use strict';

let secretNumber = generateSecretNumber();
let score = 10;
let highscore = 0;
let initialMessage = document.querySelector('.message').textContent;

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  return (document.querySelector('.message').textContent = message);
}

function checkAnswer() {
  return document
    .querySelector('.check')
    .addEventListener('click', function () {
      const guess = Number(document.querySelector('.guess').value);

      if (!guess) {
        displayMessage('No Number!');
      } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        // document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#5AAB2B';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
      } else if (guess !== secretNumber) {
        if (score > 1) {
          displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
          document.querySelector('.score').textContent = --score;
        } else {
          displayMessage('You lose the game!');
          document.querySelector('body').style.backgroundColor = '#AB2328';
        }
      }
    });
}

function playAgain() {
  return document
    .querySelector('.again')
    .addEventListener('click', function () {
      secretNumber = generateSecretNumber();
      score = 10;
      document.querySelector('.message').textContent = initialMessage;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('.guess').value = '';
      document.querySelector('.number').textContent = '?';
      console.log(secretNumber);
    });
}

console.log(secretNumber);
document.querySelector('.score').textContent = score;

checkAnswer();

playAgain();
