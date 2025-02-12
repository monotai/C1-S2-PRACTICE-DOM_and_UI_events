// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  // TODO
  let task = {description: "task", priority: 0};
  //  2- Set the description from the text field
  // TODO
  const description = document.getElementById("description");
  task.description = description.value;
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

// my function
function newLine(container) {
  let newLine = document.createElement("br");
  container.appendChild(newLine);
}

const container = document.getElementsByClassName("container")[0];
const showConstainer = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "1fr 1fr";
container.style.gap = "30px";
container.appendChild(showConstainer);

function displayTasks(tasks) {
  showConstainer.innerHTML = ''; // clear
  tasks.forEach(task => {
    let taskElement = document.createElement("div");
    taskElement.style.textAlign = "center";
    taskElement.style.padding = "20px";
    taskElement.style.width = "100%";
    taskElement.style.color = "white";
    taskElement.textContent = task.description;
    if (task.priority === 1) {
      taskElement.style.backgroundColor = "red";
    }
    else {
      taskElement.style.backgroundColor = "gray";
    }
    newLine(showConstainer);
    showConstainer.appendChild(taskElement);
  });
}

const form = document.querySelector("form");

const showHighButton = document.createElement("button");
showHighButton.textContent = "Show only the important task";
showHighButton.addEventListener('click', () => displayTasks(tasks.filter(task => task.priority === 1)));
newLine(form);
newLine(form);
form.appendChild(showHighButton);

const showLowButton = document.createElement("button");
showLowButton.textContent = "Show the task that not important";
showLowButton.addEventListener('click', () => displayTasks(tasks.filter(task => task.priority === 0)));
newLine(form);
newLine(form);
form.appendChild(showLowButton);

const showAllButton = document.createElement("button");
showAllButton.textContent = "Show all the tasks";
showAllButton.addEventListener('click', () => displayTasks(tasks));
newLine(form);
newLine(form);
form.appendChild(showAllButton);