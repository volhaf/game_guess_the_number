'use strict';

document.querySelector('.check').addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    console.log(guessingNumber);


    if(!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Input some number';
    }

});