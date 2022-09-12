/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let guess = 'heads';
let flip = 'heads';
let result = 'win'; // 'win' or 'lose'

let flips = 0;
let wins = 0;

const sides = ['heads', 'tails'];

/* Actions */
function loadPage() {
    displayGuess();
    displayResults();
    displayScoreboard();
}

function flipCoin(userGuess) {
    gameState = 'results';
    guess = userGuess;
    flip = getRandomItem(sides);
    flips++;

    if (guess === flip) {
        result = 'win';
        wins++;
    } else {
        result = 'lose';
    }

    displayGuess();
    displayResults();
    displayScoreboard();
}

function playAgain() {
    gameState = 'guess';

    displayGuess();
    displayResults();
    displayScoreboard();
}

/* Components */

/* Scoreboard */
const flipsDisplay = document.getElementById('flips-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');

function displayScoreboard() {
    flipsDisplay.textContent = flips;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = flips - wins;
}

/* Guess */
// get DOM
const guessHeads = document.getElementById('guess-heads');
const guessTails = document.getElementById('guess-tails');

// display
function displayGuess() {
    guessHeads.classList.remove('win', 'lose', 'fade-out');
    guessTails.classList.remove('win', 'lose', 'fade-out');

    if (gameState === 'results') {
        // guess is heads
        if (guess === 'heads') {
            // fade-out tails button
            guessTails.classList.add('fade-out');
            // add win or lose class to heads button
            guessHeads.classList.add(result);
            // if (flip === 'heads') {
            //     guessHeads.classList.add('win');
            // } else {
            //     guessHeads.classList.add('lose');
            // }
            // guess is tails
        } else {
            // fade-out heads button
            guessHeads.classList.add('fade-out');
            // add win or lose class to tails button
            guessTails.classList.add(result);
        }
    }
}

// event listeners
guessHeads.addEventListener('click', () => {
    flipCoin('heads');
});
guessTails.addEventListener('click', () => {
    flipCoin('tails');
});

/* Results */
const flipImage = document.getElementById('flip-image');
const flipDisplay = document.getElementById('flip-display');
const resultsSection = document.getElementById('results-section');
const playAgainButton = document.getElementById('play-again-button');

function displayResults() {
    if (gameState === 'results') {
        resultsSection.classList.remove('hidden');
        flipImage.src = 'assets/coin-' + flip + '.png';
        flipDisplay.textContent = flip;
    } else {
        resultsSection.classList.add('hidden');
    }
}

playAgainButton.addEventListener('click', () => {
    playAgain();
});

/* Run page load code */
loadPage();
