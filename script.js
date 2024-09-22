let rollCount = 0;

function rollDice() {
    let rollResults = [];
    for (let i = 1; i <= 5; i++) {
        const die = document.getElementById(`die${i}`);
        const randomNumber = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
        die.textContent = randomNumber; // Display the number
        rollResults.push(randomNumber);
    }
    rollCount++;
    displayResults(rollResults);
}

function displayResults(rollResults) {
    const rollResultsDiv = document.getElementById("rollResults");
    const rollResultText = `Roll ${rollCount}: ${rollResults.join(", ")}`;
    const resultElement = document.createElement("span");
    resultElement.textContent = rollResultText;
    rollResultsDiv.appendChild(resultElement);
}
