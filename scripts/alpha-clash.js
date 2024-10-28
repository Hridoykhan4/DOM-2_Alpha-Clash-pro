/* function play(){
    // hide the Home Screen,to hide the screen add the class 'hidden'

   const homeSection = document.getElementById('home-screen');
   homeSection.classList.add('hidden')

    // Show The PlayGround
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden')
} */

    function handleKeyboardUpEvent(event){
        const playerPressed = event.key;
        // console.log('You have Pressed', playerPressed);

      const currentAlphabetElement = document.getElementById('current-alphabet');  
        const currentAlphabet = currentAlphabetElement.innerText;
        // console.log(playerPressed, currentAlphabet)


        // Check Matched Or Not
        if(playerPressed === currentAlphabet){
            console.log('Milse');

           const currentScore = getTextElementValueById('current-score')
           const updatedScore = currentScore + 1;
           setTextElementValueById('current-score', updatedScore);

           


        //    const currentScoreElement = document.getElementById('current-score');
        //    const currentScoreText = currentScoreElement.innerText;
        //    const currentScore = parseInt(currentScoreText)
           
        //    const newScore = currentScore + 1;
        //    currentScoreElement.innerText = newScore;

        }
        else{
            console.log('Mile Nai');

            const currentLife = getTextElementValueById('current-life');
           const updatedLife = currentLife - 1;
           setTextElementValueById('current-life', updatedLife);

           if(updatedLife === 0){
                gameOver(); 
           }

          /*   const currentLifeElement = document.getElementById('current-life');
            const currentLifeText =  currentLifeElement.innerText;
            const currentLife = parseInt(currentLifeText);

            const newLife = currentLife - 1;
            currentLifeElement.innerText = newLife */
        }
    }


    

    // Capture Key Board Key Press
   document.addEventListener('keyup', handleKeyboardUpEvent)

    function continueGame(){
       const alphabet =  getARandomAlphabet();
    //    console.log('Your Current alphabet', alphabet)
       
    //    Set Randomly Generated Alphabet into the screen
       const currentAlphabet = document.getElementById('current-alphabet');
       currentAlphabet.innerText = alphabet;
       setBackgroundColorById(alphabet)
    }

    function play(){

        // Hide EveryThing... Show Only The PlayGround
        hideElementById('home-screen');
        showElementById('play-ground');
        hideElementById('final-score');
        
        
        // Reset Score And Life
        setTextElementValueById('current-life', 5)
        setTextElementValueById('current-score', 0)
        continueGame();    
        
        
    }



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

    

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score')
}


 */