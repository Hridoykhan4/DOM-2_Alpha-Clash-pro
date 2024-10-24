/* function play(){
    // hide the Home Screen,to hide the screen add the class 'hidden'

   const homeSection = document.getElementById('home-screen');
   homeSection.classList.add('hidden')

    // Show The PlayGround
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden')
} */

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



    function handleKeyboardKeyUpEvent(event){
        const playerPressed = event.key;

        const currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText;

        if(playerPressed === currentAlphabet){
            console.log('u got point');
            console.log('You have pressed correctly', currentAlphabet);
            removeBackgroundById(currentAlphabet)
            continueGame();
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
    showElementById('play-ground');
    continueGame();
}




