/* function play(){
    // hide the Home Screen,to hide the screen add the class 'hidden'

   const homeSection = document.getElementById('home-screen');
   homeSection.classList.add('hidden')

    // Show The PlayGround
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden')
} */
function play(){
    hideElementById('home-screen');
    showElementById('play-ground')
}