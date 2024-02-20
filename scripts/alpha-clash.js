const artBoard = document.getElementById('art-board');
const modalBox = document.getElementById('modal-box');

function home() {
  //* hide everything
  showElementById('home');
  hideElementById('play-ground');
  hideElementById('play-again');
}
function play() {
  //* play audio
  audio.src = '../audio/open.mp3';
  audio.play();
  //* hide everything
  hideElementById('home');
  showElementById('play-ground');
  hideElementById('play-again');
  //* reset score and life
  setTextElementValueById('current-score', 0);
  setTextElementValueById('current-life', 5);
  setTextElementValueById('last-score', 0);
  //* start game
  continueGame();
}
function score() {
  //* play audio
  audio.src = '../audio/success.mp3';
  audio.play();
  hideElementById('home');
  hideElementById('play-ground');
  showElementById('play-again');
  isGamePlayOn = false;
}

let audio = new Audio();
let isGamePlayOn = false;
function handleKeyboardKeyUpEvent(event) {
  if (isGamePlayOn == false) return;
  const playerPressed = event.key.toLowerCase();
  //* get the expected key to press
  const currentLetterElement = document.getElementById('current-letter');
  const currentLetter = currentLetterElement.innerText;
  const expectedLetter = currentLetter.toLowerCase();
  if (playerPressed === 'escape' || playerPressed === 'Escape') {
    removeBackgroundColorById(expectedLetter);
    score();
  } else {
    //* check key-press matched or not
    if (playerPressed === expectedLetter) {
      //* play audio
      audio.src = '../audio/click.mp3';
      audio.play();
      //* update score
      const currentScore = getTextElementValueById('current-score');
      const newScore = currentScore + 1;
      setTextElementValueById('current-score', newScore);
      setTextElementValueById('last-score', newScore);
      //* start a new round
      removeBackgroundColorById(expectedLetter);
      continueGame();
    } else {
      //* play audio
      audio.src = '../audio/wrong.mp3';
      audio.play();
      //* update life
      const currentLife = getTextElementValueById('current-life');
      const newLife = currentLife - 1;
      setTextElementValueById('current-life', newLife);
      newLifePercentage = (newLife / 5) * 100;
      artBoard.style.background = `linear-gradient(#FFFFFFB3 ${newLifePercentage}%, red)`;

      /* ---> upore er dynamic newLifePercentage kora ache ------
      if (newLife === 4) {
        artBoard.style.background = 'linear-gradient(#FFFFFFB3 75%, red)';
      } else if (newLife === 3) {
        artBoard.style.background = 'linear-gradient(#FFFFFFB3 60%, red)';
      } else if (newLife === 2) {
        artBoard.style.background = 'linear-gradient(#FFFFFFB3 40%, red)';
      } else if (newLife === 1) {
        artBoard.style.background = 'linear-gradient(#FFFFFFB3 20%, red)';
      }
      */

      if (newLife === 0) {
        //* go to score board
        removeBackgroundColorById(expectedLetter);
        artBoard.style.background = 'linear-gradient(#FFFFFFB3 100%, red)';
        score();
      }
    }
  }
}

function continueGame() {
  isGamePlayOn = true;
  //* 1- generate a random letter
  const letter = getARandomLetter();
  //* 2- set random letter to the screen (show it)
  const currentLetterElement = document.getElementById('current-letter');
  currentLetterElement.innerText = letter.toUpperCase();
  //* 3- set background color
  setBackgroundColorById(letter);
}

//* capture keyboard key-press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function modalOpen(event) {
  if (event.clientY < 5) {
    modalBox.style.display = 'flex';
  }
}

function modalClose() {modalBox.style.display = 'none';}

document.body.onmousemove = modalOpen;
