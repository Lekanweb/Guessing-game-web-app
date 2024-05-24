document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 3;

    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    submitGuess.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts--;
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number ${randomNumber}.`;
        submitGuess.disabled = true;
        guessInput.disabled = true;
    } else if (attempts > 0) {
        if (userGuess < randomNumber) {
        message.textContent = 'Too low!';
        } else {
        message.textContent = 'Too high!';
        }
        attemptsDisplay.textContent = `Attempts remaining: ${attempts}`;
    } else {
        message.textContent = `Game over! The correct number was ${randomNumber}.`;
        submitGuess.disabled = true;
        guessInput.disabled = true;
        attemptsDisplay.textContent = `Attempts remaining: 0`;
    }

    guessInput.value = '';
    });
});
