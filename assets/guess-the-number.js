const guess = document.getElementById('number');
const guessRemaining = document.getElementById('guesses-remaining');
const lastGuess = document.getElementById('last-guess');
const highLow = document.getElementById('high-low');
const winText = document.getElementById('win-text');
const game = document.getElementById('c-game');
const start = document.getElementById('c-start');
const bar = document.getElementById('c-bar');



let guessCount = 8;
let previousGuess = "";
let answer = Math.floor(Math.random() * 101);

console.log(answer);

game.style.display = 'none';
bar.style.display = 'none';
winText.style.display = 'none';

window.addEventListener('keydown', keyDownHandler);

function keyDownHandler(e) {
    if (e.keyCode === 13) {
        submitAnswer();
    }
}

function submitAnswer() {
   console.log(guess.value)
  
    if (guess.value.match(/[a-z]/gi)) {
        guessCount.innerHTML = "Guesses remaining: " + guessCount;
        lastGuess.innerHTML = "BOOOO!";
        highLow.innerHTML = "Not a number!";
    }
    else {

        if (guess.value < answer) {
            highLow.innerHTML = "Higher!";

        }
        else if (guess.value > answer) {
            highLow.innerHTML = "Lower!";
        }
        else if (guess.value == answer) {
            win();
        }
        guessCount--;
        previousGuess = guess.value;
        lastGuess.innerHTML = "Last guess: " + previousGuess;
        if (guessCount > 1) {
            guessRemaining.innerHTML = "Guesses remaining: " + guessCount;

        }
    }
}

function win(){
    winText.style.display = 'block';
}

function startGame(){
    start.style.display = 'none';
    game.style.display = 'flex';
    bar.style.display = 'flex';
    
}