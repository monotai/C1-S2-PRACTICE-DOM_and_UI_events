// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
// passwordInput.addEventListener("keypress", handleEnterPasserord);

const instructionLabel = document.getElementById("instructionLabel");
 
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

let changes = 3;
function showGame() {
  // You can use this function to dispaly the Game view
  hide(lostView);
  hide(wonView);
  show(passwordView);

}

function showWin() {
  // You can use this function to dispaly the Win View
  show(wonView);
}
function showLost() {
    // You can use this function to dispaly the Lost View
    if(changes !== 0) {
      tryAgainButton.textContent = `Try again ! (${changes} chances left)`;
      instructionLabel.textContent = `ENTER YOUR CODE (${changes} CHANCES LEFT)`;
    }
    else {
      hide(tryAgainButton);
    }
  
  show(lostView);
}

function handleCheck() {
     // Manage your logic when the button is pressed
     hide(passwordView);
     if (passwordInput.value == SECRET_CODE) {
      instructionLabel.textContent = `Enter your code (You can try ${changes} times only !)`
      showWin();
     }
     else {
      changes--;
      showLost();
     }
}

// MAIN   ---------------------------------------------------------

 