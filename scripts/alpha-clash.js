let count = 30;
let intervalId = null;

const handleTouchInput = (event) => {
  const touchedElement = event.target.innerText.toLowerCase();
  const expectedAlphabet = document
    .getElementById("current-alphabet")
    .innerText.toLowerCase();

  if (touchedElement === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    setElementValueById("current-score", currentScore + 1);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const newLife = currentLife - 1;
    setElementValueById("current-life", newLife);
    if (newLife === 0) {
      gameOver();
    }
  }
};
document.addEventListener("touchstart", handleTouchInput);

const currentAlphabet = document.getElementById("current-alphabet");

const handleKeyBoardBtnPress = (e) => {
  const btnPressed = e.key;
  if (btnPressed === "Escape") {
    gameOver();
    return;
  }
  const btnChecked = currentAlphabet.textContent;
  if (btnChecked === btnPressed) {
    const currentScore = getTextElementValueById("current-score");
    setElementValueById("current-score", currentScore + 1);
    removeBackgroundColorById(btnChecked);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    setElementValueById("current-life", currentLife - 1);
    if (currentLife - 1 === 0) {
      gameOver();
    }
  }
};

const continueGame = () => {
  const alphabet = getARandomAlphabet();
  setElementValueById("current-alphabet", alphabet);
  setBackgroundColorById(alphabet);
  document.removeEventListener("keyup", handleKeyBoardBtnPress);
  document.addEventListener("keyup", handleKeyBoardBtnPress);
};

const gameOver = () => {
  clearInterval(intervalId);
  intervalId = null;
  hideElementById("play-ground");
  showElementById("final-score");
  setElementValueById(
    "last-score",
    document.getElementById("current-score").textContent
  );
  removeBackgroundColorById(currentAlphabet.textContent);
  document.removeEventListener("keyup", handleKeyBoardBtnPress);
};

const play = () => {
  clearInterval(intervalId);
  intervalId = null;
  count = 30;
  setElementValueById("current-life", 5);
  setElementValueById("current-score", 0);
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("final-score");
  setElementValueById("timing-counter", count);

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    count--;
    setElementValueById("timing-counter", count);
    if (count === 0) {
      clearInterval(intervalId);
      intervalId = null;
      gameOver();
    }
  }, 1000);

  continueGame();
};
