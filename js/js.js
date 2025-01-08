'use strict';
let sectetNumber = Math.trunc(Math.random() * 50) +1;
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
    document.querySelector('.guess-message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    console.log(guessingNumber);

    if(!guessingNumber) {
        displayGuessMessage('Input some number!')

    } else if (guessingNumber === sectetNumber) {
        displayGuessMessage('Сorrectly !!! ')
        document.querySelector('.question').textContent = sectetNumber;
        document.querySelector('body').style.backgroundColor = '#fff';
        document.querySelector('.question').style.width = '50rem'
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guessingNumber !== sectetNumber) {
        if(score > 1) {
            displayGuessMessage(guessingNumber > sectetNumber ? 'too big' : 'too small');
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            displayGuessMessage('Game Over!')
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
        // document.querySelector('.guess-message').textContent = 'Start guessing !';
        displayGuessMessage('Start guessing !')
        document.querySelector('.score').textContent = score;
        document.querySelector('.number-input').value = null;
        document.querySelector('body').style.backgroundColor = '#000';
})
