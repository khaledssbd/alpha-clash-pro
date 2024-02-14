function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-yellow-400');
}

function getARandomLetter() {
  //* 1- get or create a random letter array
  const letterString = 'abcdefghijklmnopqrstuvwxyz';
  const letters = letterString.split('');

  //* Get a random index between 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const letter = letters[index];
  return letter;
}
