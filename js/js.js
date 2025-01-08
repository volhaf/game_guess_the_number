'use strict';
let sectetNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;


const displayNumberInput = function (value) {
    document.querySelector('.number-input').value = value;
}
const displayGuessMessage = function (message) {
    document.querySelector('.guess-message').textContent = message;
}
const displayGuessMessageStyle = function (message) {
    document.querySelector('.guess-message').style.color = message;
}
const displayScoreMessage = function (value) {
    document.querySelector('.score').textContent = value;
}
const displayQuestion = function (num) {
    document.querySelector('.question').textContent = num;
}
const displayBodyStyle = function (style) {
    document.querySelector('body').style.backgroundColor = style;
}
const displayQuestionStyle = function (style) {
    document.querySelector('.question').style.width = style;
}
const displayScoreStyle = function (value) {
    document.querySelector('.highscore').textContent = value;
}


document.querySelector('.check').addEventListener('click', function () {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    console.log(guessingNumber);

    if (!guessingNumber) {
        displayGuessMessage('Input some number!')

    } else if (guessingNumber === sectetNumber) {
        displayGuessMessage('Сorrectly !!! ')
        displayQuestion(sectetNumber)
        displayBodyStyle('#fff');
        displayQuestionStyle('50rem');
        if (score > highscore) {
            highscore = score
            displayScoreStyle(highscore)
        }

    } else if (guessingNumber !== sectetNumber) {
        if (score > 1) {
            displayGuessMessage(guessingNumber > sectetNumber ? 'too big' : 'too small');
            score = score - 1;
            displayScoreMessage(score);
        } else {
            displayGuessMessage('Game Over!');
            displayGuessMessageStyle('#FF0000');
            displayScoreMessage(0);

        }
    }
});

document.querySelector('.again').addEventListener('click',
    function () {
        sectetNumber = Math.trunc(Math.random() * 50) + 1;
        score = 20;
        displayQuestion('???');
        displayQuestionStyle('25rem');
        displayGuessMessage('Start guessing !')
        displayScoreMessage(score);
        displayNumberInput(null);
        displayGuessMessageStyle('#0bdd11');
        displayBodyStyle('#000');
    })
