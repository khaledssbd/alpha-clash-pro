// function play() {
//   //* step-1: to hide the home-screen add the class hidden to the home section
//   const homeSection = document.getElementById('home');
//        homeSection.classList.add('hidden');

//   //* step-2: to show the playground remove the class hidden from the playground section
//   const playGround = document.getElementById('play-ground');
//   playGround.classList.remove('hidden');
// }

function play() {
  hideElementById('home');
  showElementById('play-ground');
  continueGame();
}
function score() {
  hideElementById('play-ground');
  showElementById('play-again');
}

function playAgain() {
  hideElementById('play-again');
  showElementById('home');
}

function continueGame() {
  //* 1- generate a random letter
  const letter = getARandomLetter();
  //* 2- set random letter to the screen (show it)
  const currentLetterElement = document.getElementById('current-letter');
  currentLetterElement.innerText = letter.toUpperCase();
  //* 3- set background color
  setBackgroundColorById(letter);
}
