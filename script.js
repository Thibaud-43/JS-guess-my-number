'use strict';

let random = Math.trunc(Math.random() * 20 + 1);
let score = 5;
let pause = false;

console.log(random);

const decrementScore = () => {
  score > 0 ? score-- : (score = 0);
  document.querySelector('.score').textContent = score;
};

const lost = () => {
  pause = true;
  decrementScore();
  document.querySelector('body').style.backgroundColor = '#DC143C';
  document.querySelector('.message').textContent = 'You lost !';
  document.querySelector('.number').textContent = random;
};

const eventHandlerCheck = () => {
  if (pause) return;
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number !';
  } else if (guess === random) {
    pause = true;
    document.querySelector('.message').textContent = 'Correct !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = random;
  } else if (guess < random) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low !';
      decrementScore();
    } else {
      lost();
    }
  }
  if (guess > random) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High !';
      decrementScore();
    } else {
      lost();
    }
  }
};

const eventHandlerAgain = () => {
  random = Math.trunc(Math.random() * 20 + 1);
  console.log(random);

  score = 5;
  pause = false;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Type a number !';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
};

document.querySelector('.check').addEventListener('click', eventHandlerCheck);
document.querySelector('.again').addEventListener('click', eventHandlerAgain);
