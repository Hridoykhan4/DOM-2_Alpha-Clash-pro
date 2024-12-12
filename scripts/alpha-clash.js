const handleKeyBoardButtonPress = (event) => {
    const keyPressed = event.key;

    if(keyPressed === 'Escape'){
      gameOver()
    }


    const expectedAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
  

    if(keyPressed === expectedAlphabet){

     const currentScore = getTextElementValueById('current-score')

      const newScore = currentScore + 1;

      setElementValueById('current-score', newScore)


      removeBackgroundColorById(expectedAlphabet)
      continueGame()
    }
    else{
      const currentLife = getTextElementValueById('current-life');
      const newLife = currentLife - 1;
      setElementValueById('current-life', newLife)
      if(newLife === 0){
        gameOver()
      }
    }
  }

const gameOver = () => {
  hideElementById('play-ground');
  showElementById('final-score');
  const currentScore = document.getElementById('current-score');
  const score = currentScore.innerText;
  setElementValueById('last-score', score);

  const current = document.getElementById('current-alphabet').innerText;
  removeBackgroundColorById(current)
}





document.addEventListener('keyup', handleKeyBoardButtonPress)




function continueGame() {
   const alphabet = getARandomAlphabet();
   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabet;
   setBackgroundColorById(alphabet)

}




function play() {
  hideElementById('home-screen');
  showElementById('play-ground');
  hideElementById('final-score')

  setElementValueById('current-life', 5);
  setElementValueById('current-score', 0);


  continueGame();
}