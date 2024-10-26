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


/* 

   <!-- PlayGround-start -->
        <section id="play-ground" class="hidden">
            
            <div class="flex flex-col items-center gap-4 pb-40">
               <!-- Screen -->
              <!--   <div>
                    <div class="artboard artboard-horizontal phone-6 mx-auto mb-8 text-white border-[20px] rounded-2xl border-[#010313CC]
                    bg-[#FFFFFFB3]">
                     <div class="flex justify-center">
                        <p class="bg-[#2F2941] px-6 pb-4 rounded-lg">Dont Watch KeyBoard While Playing</p>
                     </div>
                     <div class="flex items-center justify-center h-full">
                     <p id="current-alphabet" class="text-black text-9xl font-bold">y</p>

                     </div>
                    </div>
                </div> -->
                <!-- KeyBoard start-->
                 <div>
                    <div class="my-1 flex w-full justify-center gap-1">
                        <kbd id="q" class="kbd">q</kbd>
                        <kbd id="w" class="kbd">w</kbd>
                        <kbd id="e" class="kbd">e</kbd>
                        <kbd id="r" class="kbd">r</kbd>
                        <kbd id="t" class="kbd">t</kbd>
                        <kbd id="y" class="kbd">y</kbd>
                        <kbd id="u" class="kbd">u</kbd>
                        <kbd id="i" class="kbd">i</kbd>
                        <kbd id="o" class="kbd">o</kbd>
                        <kbd id="p" class="kbd">p</kbd>
                      </div>
                      <div class="my-1 flex w-full justify-center gap-1">
                        <kbd id="a" class="kbd">a</kbd>
                        <kbd id="s" class="kbd">s</kbd>
                        <kbd id="d" class="kbd">d</kbd>
                        <kbd id="f" class="kbd">f</kbd>
                        <kbd id="g" class="kbd">g</kbd>
                        <kbd id="h" class="kbd">h</kbd>
                        <kbd id="j" class="kbd">j</kbd>
                        <kbd id="k" class="kbd">k</kbd>
                        <kbd id="l" class="kbd">l</kbd>
                      </div>
                      <div class="my-1 flex w-full justify-center gap-1">
                        <kbd id="z" class="kbd">z</kbd>
                        <kbd id="x" class="kbd">x</kbd>
                        <kbd id="c" class="kbd">c</kbd>
                        <kbd id="v" class="kbd">v</kbd>
                        <kbd id="b" class="kbd">b</kbd>
                        <kbd id="n" class="kbd">n</kbd>
                        <kbd id="m" class="kbd">m</kbd>
                        <kbd id="/" class="kbd">/</kbd>
                      </div>
                 </div>
                <!-- KeyBoard end-->
                 <!-- Life score -->
                <div class="flex gap-3 justify-between w-3/4">
                    <button class="btn rounded-full bg-green-900 px-6 text-white">
                        Life
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span id="current-life">5</span>
                      </button>
                      <button class="btn rounded-full bg-blue-600 px-6 text-white">
                          Score
                          <i class="fa-solid fa-dollar-sign"></i>
                          <span id="current-score">0</span>
                      </button>
                </div>
            </div>
        </section>
        <!-- PlayGround-end -->

        <!-- Final Score Start -->
        <section id="final-score" class=" hidden flex justify-center items-center min-h-screen">
                <div class="text-white text-center space-y-6 bg-[#FFFFFF33] p-4 rounded-lg">
                    <h4 class="text-3xl">Game Over ! </h4>
                     <h1 class="text-8xl">
                        <span class="font-extrabold">Score</span>
                        <span>14</span>
                     </h1>
                     <button onclick="play()" class="btn bg-gray-500 text-white">Play Again</button>
                     <p>Practice will make you a pro</p>
                </div>
        </section>

*/