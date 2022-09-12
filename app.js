/* Imports */

/* State */
let name = 'dog';

/* Actions */
function loadPage() {
    displayNameTag();
}

function updateName(newName) {
    name = newName;
    displayNameTag();
}

/* Components */

/* Component */

/* NameTag */
// get DOM
const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const updateButton = document.getElementById('update-button');

// display
function displayNameTag() {
    nameDisplay.textContent = name;
}

// event listeners
updateButton.addEventListener('click', () => {
    // get the new name value
    const newName = nameInput.value;

    // call action
    updateName(newName);
});

/* Run page load code */
loadPage();
