function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display user and computer choices
    document.getElementById("user-choice").textContent = `Your choice: ${userChoice}`;
    document.getElementById("computer-choice").textContent = `Computer's choice: ${computerChoice}`;

    // Determine the result
    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    // Display the result
    document.getElementById("result").textContent = result;
}

