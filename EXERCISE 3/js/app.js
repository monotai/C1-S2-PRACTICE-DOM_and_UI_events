const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
  let card = document.createElement("div");
  let para = document.createElement("p");
  let cartFooter = document.createElement("div");
  let buttons = document.createElement("button");
  card.className = "card";
  cartFooter.className = "card-footer";
  para.textContent = "Description";
  buttons.textContent = "Remove Card";
  cartFooter.appendChild(buttons);
  // 1 - Random color for card
  card.style.background = randomColor();
  // 2 - Set card text
  para.textContent = "Hello";
  card.appendChild(para);
  card.appendChild(cartFooter);
  // 3 - Set card footer
  //  4 - Manage footer button
  document.querySelector('.container').appendChild(card);
  // 5 - Add card to containers
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);