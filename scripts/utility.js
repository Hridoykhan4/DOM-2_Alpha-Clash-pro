const hideElementById = (elementId) => {
  const id = document.getElementById(elementId);
  id.classList.add('hidden')
}

const showElementById = (elementId) => {
  const id = document.getElementById(elementId);
  id.classList.remove('hidden');
}

const getARandomAlphabet = () => {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    return alphabets[index]
}


const getTextElementValueById = (elementId) => {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value
}

const setElementValueById = (elementId, value) => {
    const element = document.getElementById(elementId);
    element.innerText = value
}



const setBackgroundColorById = (elementId) => {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}


const removeBackgroundColorById = (elementId) => {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}