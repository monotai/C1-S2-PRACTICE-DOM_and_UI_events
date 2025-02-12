// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  // TODO
  let task = {discription: "task", priority: 0};
  //  2- Set the description from the text field
  // TODO
  const description = document.getElementById("description");
  task.discription = description.value;
  // 3- Set the priority from select field
  // TODO
  const priority = document.getElementById("priority");
  if (priority.value == "High") {
    task.priority = 1;
  }
  // 4- Add the new object to the array
  // TODO
  tasks.push(task);
  console.log(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);

// diplayTasks(tasks)
const showAllButton = document.createElement("button");
showAllButton.textContent = "Show all the tasks";
showAllButton.addEventListener('click', displayTasks(tasks));
const form = document.querySelector("form");
var newLine = document.createElement("br");
form.appendChild(newLine);
form.appendChild(newLine);
form.appendChild(newLine);
form.appendChild(showAllButton);
function displayTasks(tasks) {
  let task = document.createElement("div");
  tasks.forEach( (discription, priority) => {
    task.textContent = discription;
    if (priority == 1) {
      task.style.backgroundColor = "red";
    }
    else {
      task.style.backgroundColor = "gray";
    }
  });
}