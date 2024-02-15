function home() {
  //* hide everything
  showElementById('home');
  hideElementById('play-ground');
  hideElementById('play-again');
}
function play() {
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
  hideElementById('home');
  hideElementById('play-ground');
  showElementById('play-again');
  //* update final score
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

function handleKeyboardKeyUpEvent(event) {
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
      //* update score
      const currentScore = getTextElementValueById('current-score');
      const newScore = currentScore + 1;
      setTextElementValueById('current-score', newScore);
      setTextElementValueById('last-score', newScore);
      //* start a new round
      removeBackgroundColorById(expectedLetter);
      continueGame();
    } else {
      //* update life
      const currentLife = getTextElementValueById('current-life');
      const newLife = currentLife - 1;
      setTextElementValueById('current-life', newLife);
      if (newLife === 0) {
        //* go to score board
        removeBackgroundColorById(expectedLetter);
        score();
      }
    }
  }
}

//* capture keyboard key-press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);
