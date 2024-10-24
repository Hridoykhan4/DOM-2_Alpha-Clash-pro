function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

    function removeBackgroundById(elementId){
        const element = document.getElementById(elementId);
        element.classList.remove('bg-orange-400')
    }

    function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
    element.classList.add('font-bold')
}


function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];

    return alphabet
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