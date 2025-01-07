'use strict';
let sectetNumber = Math.trunc(Math.random() * 50) +1;
let score = 20;
let highscore = 0;





document.querySelector('.check').addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    console.log(guessingNumber);

        // No input
    if(!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Input some number!';
        //Player won
    } else if (guessingNumber === sectetNumber) {
        document.querySelector('.guess-message').textContent = 'Сorrectly !!! ';
        document.querySelector('.question').textContent = sectetNumber;
        document.querySelector('body').style.backgroundColor = '#fff';
        document.querySelector('.question').style.width = '50rem'
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
        //too high
    } else if (guessingNumber > sectetNumber) {
        if(score > 1) {
            document.querySelector('.guess-message').textContent = 'too big';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.guess-message').textContent = 'Game Over! ';
            document.querySelector('.score').textContent = 0;
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

document.querySelector('.again').addEventListener('click',
    function() {
        sectetNumber = Math.trunc(Math.random() * 50) +1;
        score = 20;
    document.querySelector('.question').textContent = '???';
        document.querySelector('.question').style.width = '25rem';
        document.querySelector('.guess-message').textContent = 'Start guessing !';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number-input').value = null;
        document.querySelector('body').style.backgroundColor = '#000';
})
