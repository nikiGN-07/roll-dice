function rollDice() {
    for (let i = 1; i <= 5; i++) {
        const die = document.getElementById(`die${i}`);
        const randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
        die.textContent = randomNumber; // Display the random number on the die
    }
}
