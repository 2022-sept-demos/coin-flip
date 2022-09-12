/* Imports */

/* State */
let name = 'Joe';

/* Actions */
function loadPage() {
    displayNameTag();
}

/* Components */

/* Component */

/* NameTag */
// get DOM
const nameDisplay = document.getElementById('name-display');

// display
function displayNameTag() {
    nameDisplay.textContent = name;
}

// event listeners

/* Run page load code */
loadPage();
