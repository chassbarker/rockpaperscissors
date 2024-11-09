function playGame(userChoice) {
    // Generate computer's choice
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Display the choices
    document.getElementById('user-choice').textContent = `Your choice: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;
    
    // Determine the result
    let result = '';
    const userChoiceElement = document.querySelector(`.hand.${userChoice}`);
    userChoiceElement.classList.add('shake');
    
    // Set a timeout to remove the shake class after the animation ends
    setTimeout(() => {
        userChoiceElement.classList.remove('shake');
    }, 500);

    // Logic for determining the winner
    if (userChoice === computerChoice) {
        result = "It's a tie! Try again!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "🎉 You win! 🎉";
        document.getElementById('result').style.color = '#228b22'; // Green for win
    } else {
        result = "😢 You lose! 😢";
        document.getElementById('result').style.color = '#ff6347'; // Red for loss
    }

    document.getElementById('result').textContent = result;
}

