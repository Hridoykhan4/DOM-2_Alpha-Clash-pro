/* function play(){
    // hide the Home Screen,to hide the screen add the class 'hidden'

   const homeSection = document.getElementById('home-screen');
   homeSection.classList.add('hidden')

    // Show The PlayGround
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden')
} */

    function continueGame(){
       const getARandomAlphabet()
    }

    function play(){
        hideElementById('home-screen');
        showElementById('play-ground');
        continueGame();
    }


    /* function handleKeyboardKeyUpEvent(event){
        const playerPressed = event.key;
        console.log('player pressed', playerPressed);

        // Get the expected to press
        const currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText;
        console.log(playerPressed, currentAlphabet)


        // Checked Matched or Not
        if(playerPressed === currentAlphabet){
            console.log('Hello')
        }
    }    */



   /*  function handleKeyboardKeyUpEvent(event){
        const playerPressed = event.key;

        const currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText;

        if(playerPressed === currentAlphabet){
            console.log('u got point');

            const currentScore = getTextElementValueById('current-score');

            console.log(currentScore);
            const updatedScore = currentScore + 1;

            setTextElementValueById('current-score', updatedScore);

            


            // // Get The Current Score
            // const currentScoreElement = document.getElementById('current-score');
            // const currentScoreText = currentScoreElement.innerText;
            // const currentScore = parseInt(currentScoreText);

            // // Increase the score by 1
            const newScore = currentScore + 1;
            // currentScoreElement.innerText = newScore;


            // console.log(currentAlphabet);
            removeBackgroundById(currentAlphabet)
            continueGame();
        }


        else{
            // step 1 Get The current life Number
            const currentLifeElement = document.getElementById('current-life');
            const currentLifeText = currentLifeElement.innerText;
            const currentLife = parseFloat(currentLifeText);

          
           
            // Step 2 Reduce the life count
            const newLife = currentLife - 1;
            //  Step 3 Display the updated Life count
            currentLifeElement.innerText = newLife

            if(newLife === 0){
                gameOver();
            }
        }
    }

    document.addEventListener('keyup', handleKeyboardKeyUpEvent)

    

    function continueGame(){
        // Generate a random Alphabet
   
         const alphabet =  getARandomAlphabet();

         const currentAlphabet = document.getElementById('current-alphabet');
         currentAlphabet.innerText = alphabet;

        setBackgroundColor(alphabet)
    }




    function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score')
}


 */