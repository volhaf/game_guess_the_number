'use strict';
const sectetNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;

document.querySelector('.question').textContent = sectetNumber;


document.querySelector('.check').addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    console.log(guessingNumber);

        // No input
    if(!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Input some number!';
        //Player won
    } else if (guessingNumber === sectetNumber) {
        document.querySelector('.guess-message').textContent = 'Сorrectly !!! ';

        //too high
    } else if (guessingNumber > sectetNumber) {
        if(score > 1) {
            document.querySelector('.guess-message').textContent = 'too big';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.guess-message').textContent = 'Game Over! ';
            document.querySelector('.score').textContent = score;
        }
        //to0 low
    } else if (guessingNumber < sectetNumber) {
        if(score > 1) {
            document.querySelector('.guess-message').textContent = 'too small';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.guess-message').textContent = 'Game Over! ';
            document.querySelector('.score').textContent = 0;
        }

    }
});

