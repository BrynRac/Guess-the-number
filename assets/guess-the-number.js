const guess = document.getElementById('number');
const guessRemaining = document.getElementById('guesses-remaining');
const lastGuess = document.getElementById('last-guess');
const highLow = document.getElementById('high-low');
const wTContainer = document.getElementById('c-win-text');
const winText = document.getElementById('win-text');
const game = document.getElementById('c-game');
const start = document.getElementById('c-start');
const bar = document.getElementById('c-bar');
const restartButton = document.getElementById('restart-button');
const submitButton = document.getElementById('submit');



//Audio and volume levels ------------------------------
let music = new Audio("assets/audio/Undertale Mettaton Game Show Theme Extended.ogg");
music.volume = 0.2;
music.loop = true;

let winSound = new Audio("assets/audio/kids_cheering.ogg");
winSound.volume = 0.2;
let startButton = new Audio("assets/audio/woowoo.wav");
let wrongButton = new Audio("assets/audio/Laser.wav");
wrongButton.volume = 0.3;
let winGet = new Audio("assets/audio/powerup.wav");
winGet.volume = 0.2;

//------------------------------

//Text variables -------------------
let guessCount = 8;
let previousGuess = "";
let answer = Math.floor(Math.random() * 101);
//------------------------------------
console.log(answer); //Debug

//Remove element displays to simulate title screen
game.style.display = 'none';
bar.style.display = 'none';
wTContainer.style.display = 'none';
restartButton.style.display = 'none';


//------------------------------------

//Enter key support -------------------

function keyDownHandler(e) {
    if (e.keyCode === 13) {
        submitAnswer();
    }
}
//------------------------------------

// Start, win, lose, restart functions ---------------------

function startGame() {
    window.addEventListener('keydown', keyDownHandler);
    startButton.play();
    music.play()
    start.style.display = 'none';
    game.style.display = 'flex';

}

function win() {
    winText.innerHTML = "YOU WIN! OH YEAH!";
    submitButton.style.display = "none";
    highLow.style.display = 'none';
    wTContainer.style.display = 'flex';
    restartButton.style.display = 'flex';
    winSound.play();
    
}

function lose() {
    highLow.style.display = 'none';
    wTContainer.style.display = "flex";
    submitButton.style.display = 'none';
    restartButton.style.display = 'flex';
    winText.innerHTML = "YOU LOSE!";
}

function restart() {
    startButton.play();
    answer = Math.floor(Math.random() * 101);
    wTContainer.style.display = 'none';
    submitButton.style.display = 'flex';
    restartButton.style.display = 'none';
    highLow.style.display = 'flex';
    highLow.innerHTML = "";
    guessCount = 8;
    guessRemaining.innerHTML = "Guesses remaining: " + guessCount;
    previousGuess = "";
    lastGuess.innerHTML = "";
}
//------------------------------------

// Game loop ----------------------------------------------
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
            wrongButton.play();

        }
        else if (guess.value > answer) {
            highLow.innerHTML = "Lower!";
            wrongButton.play();
        }
        else if (guess.value == answer) {
            win();
            winGet.play();
        }
        guessCount--;
        previousGuess = guess.value;
        lastGuess.innerHTML = "Last guess: " + previousGuess;
        if (guessCount > 0) {
            guessRemaining.innerHTML = "Guesses remaining: " + guessCount;

        }
        else {
            guessCount = 0;
            previousGuess = guess.value;
            lastGuess.innerHTML = "Last guess: " + previousGuess;
            guessRemaining.innerHTML = "Guesses remaining: " + guessCount;
            lose();
        }
    }
}
// ----------------------------------------------