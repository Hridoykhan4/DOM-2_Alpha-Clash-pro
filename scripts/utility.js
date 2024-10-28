function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}


function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}


function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-yellow-400')
}
 

function removeBackgroundById(elementid){
    const element = document.getElementById(elementid);
    element.classList.remove('bg-yellow-400');
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}


function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);

    const text = element.innerText;
    return text;

}


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // Update final Score
    // Get The final Score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore)


    // Clear the Last selected Alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundById(currentAlphabet)
}















/* 
function getARandomAlphabet(){
    // get or create an alphabet Array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // Get A Random index between 0 to 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    return alphabet;
    
} */