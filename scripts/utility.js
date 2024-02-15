function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function getARandomLetter() {
  //* 1- get or create a random letter array
  const letterString = 'abcde[fghij]klm.nopq,rs;tuv/wxyz';
  const letters = letterString.split('');

  //* Get a random index between 0-31
  const randomNumber = Math.random() * 31;
  const index = Math.round(randomNumber);
  const letter = letters[index];
  return letter;
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-yellow-400');
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('bg-yellow-400');
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementTextValue = element.innerText;
  const value = parseInt(elementTextValue);
  return value;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
