// ELEMENT DEFINITIONS
const taskInput = document.querySelector('#texto-tarefa');
const addTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Creates 'add to list' button functionality
function createListItem() {
  const listItem = document.createElement('li');
  listItem.innerText = taskInput.value;
  taskInput.value = '';
  taskList.appendChild(listItem);
}

addTask.addEventListener('click', createListItem);

// Adds BG color only to the to selected element
function removeColor() {
  const allTasks = taskList.children;
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].style.backgroundColor = '';
    allTasks[i].classList.remove('selected');
  }
}

function addColor(event) {
  removeColor();
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected');
}

taskList.addEventListener('click', addColor);

// Adds or removes completed task designation
function completedTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', completedTask)