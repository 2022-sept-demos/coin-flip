/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let guess = 'heads';
let flip = 'heads';
let result = 'win'; // 'win' or 'lose'

const sides = ['heads', 'tails'];

/* Actions */
function loadPage() {
    displayGuess();
    displayResults();
}

function flipCoin(userGuess) {
    gameState = 'results';
    guess = userGuess;
    flip = getRandomItem(sides);

    if (guess === flip) {
        result = 'win';
    } else {
        result = 'lose';
    }

    displayGuess();
    displayResults();
}

/* Components */

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

function displayResults() {
    if (gameState === 'results') {
        resultsSection.classList.remove('hidden');
        flipImage.src = 'assets/coin-' + flip + '.png';
        flipDisplay.textContent = flip;
    } else {
        resultsSection.classList.add('hidden');
    }
}

/* Run page load code */
loadPage();
