function handleKeyboardUpEvent(event) {
  const playerPressed = event.key;

  if (playerPressed === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;

  if (playerPressed === currentAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);
    removeBackgroundById(currentAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (currentLife - 1 < 1) {
      gameOver();
    }
  }
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);

  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundById(currentAlphabet);
}
