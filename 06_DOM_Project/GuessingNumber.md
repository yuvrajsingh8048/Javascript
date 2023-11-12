# Project Related to DOM

## **Number Guessing Game**

## _**Javascript Code File**_
``` javascript
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
let submit = document.querySelector('#subt');
let userNumber = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remGuess = document.querySelector('.lastResult');
let hint = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

let p = document.querySelector('#startGame');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(userNumber.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess > 100) {
    alert('Please Give a Number less than 100');
  } else if (guess < 1) {
    alert('Please Give a Number more than 1');
  } else if (isNaN(guess)) {
    alert('Please Give a Valid Number');
  } else {
    prevGuess.push(guess);
  }
  if (numGuess >= 10) {
    displayGuess(guess);
    displayMessage(`Game Over, Your Random number was ${randomNumber}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(
      `Congratulations!!! You Guess it right in ${numGuess - 1} attempts 🤩🤩`
    );
    userNumber.setAttribute('disabled', '');
  } else if (guess < randomNumber) {
    displayMessage(`Your Number is Too Low`);
  } else {
    displayMessage(`Your Number is Too High`);
  }
}

function displayGuess(guess) {
  userNumber.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  hint.innerHTML = `${message}`;
}

function endGame() {
  userNumber.value = '';
  userNumber.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = 'Click here to Start a New Game, ASAP!!!!!';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  p.addEventListener('click', function (e) {
    randomNumber = Math.floor(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    hint.innerHTML = '';
    guessSlot.innerHTML = '';
    remGuess.innerHTML = `${11 - numGuess}`;
    userNumber.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```

## _**HTML Code File**_
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color:#212121; color:#fff;">
  <nav>
    <a href="/" aria-current="page">Home</a>
    <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
      >Youtube channel</a
    >
  </nav>
    
    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"> </p>
            <p id="startGame"> </p>
        </div>
    </div>
    <script src="chaiaurcode.js"></script>
</body>
</html>
```

## _**CSS Code File**_
``` css
html {
  font-family: sans-serif;
}

body {
  width: 300px;
  max-width: 750px;
  min-width: 480px;
  margin: 0 auto;
  background-color: #212121;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  margin-left: 5px;
  color: white;
  padding: 3px 8px;
}

button {
  background-color: #141414;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: #161616;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border-style: none;
  margin-top: 50px;
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 55px;
  /* margin-left: 90px; */
  margin-top: 120px;
  color: #fff;
}

.guesses {
  background-color: #7a7a7a;
}

#wrapper {
  box-sizing: border-box;
  text-align: center;
  width: 450px;
  height: 550px;
  background-color: #474747;
  color: #fff;
  font-size: 25px;
}

h1 {
  background-color: #161616;

  color: #fff;
  text-align: center;
}

p {
  font-size: 16px;
  text-align: center;
  margin-bottom: 2px;
}
#startGame:hover {
  cursor: pointer;
  color: yellow;
}

```