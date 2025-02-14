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

const handleKeyBoardButtonPress = (event) => {
  const playerPressed = event.key;
  if (playerPressed === "Escape") {
    gameOver();
  }
  const expectedAlphabet = document
    .getElementById("current-alphabet")
    .innerText.toLowerCase();

  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");

    const newScore = currentScore + 1;

    setElementValueById("current-score", newScore);
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

const gameOver = () => {
  hideElementById("play-ground");
  showElementById("final-score");
  const currentScore = document.getElementById("current-score");
  const score = currentScore.innerText;
  setElementValueById("last-score", score);

  const current = document.getElementById("current-alphabet").innerText;
  removeBackgroundColorById(current);
};

document.addEventListener("keyup", handleKeyBoardButtonPress);

const continueGame = () => {
  const alphabet = getARandomAlphabet();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  setBackgroundColorById(alphabet);
};

let intervalId;

function play() {
  let count = 30;

  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("final-score");

  setElementValueById("current-life", 5);
  setElementValueById("current-score", 0);

  continueGame();

  const timingZone = document.getElementById("timing-counter");
  timingZone.innerText = count;

  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    count--;
    timingZone.innerText = count;

    if (count <= 0) {
      clearInterval(intervalId);
      gameOver();
    }
  }, 1000);

  setTimeout(() => {
    if (count > 0) {
      clearInterval(intervalId);
      gameOver();
    }
  }, 30000);
}
