function playGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let guess;
  let attempts = 0;
  const maxAttempts = 3;

  do {
    guess = parseInt(prompt("Enter your guess (1-10):"));
    attempts++;

    if (guess === secretNumber) {
      document.getElementById(
        "result"
      ).textContent = `🎉 Correct! The number was ${secretNumber}. You won in ${attempts} attempt(s).`;
      document.getElementById("result").style.color = "green";
      return;
    }
  } while (guess !== secretNumber && attempts < maxAttempts);

  // If loop ends without correct guess
  if (guess !== secretNumber) {
    document.getElementById(
      "result"
    ).textContent = `❌ Out of attempts. The correct number was ${secretNumber}.`;
    document.getElementById("result").style.color = "red";
  }
}
