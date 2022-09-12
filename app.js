/* Imports */

/* State */
let gameState = 'results'; // 'guess' or 'results'
let guess = 'heads';
let flip = 'tails';
let result = 'win'; // 'win' or 'lose'

/* Actions */
function loadPage() {
    displayGuess();
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

/* Run page load code */
loadPage();
