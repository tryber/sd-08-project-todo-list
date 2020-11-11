// ELEMENT DEFINITIONS
const taskInput = document.querySelector('#texto-tarefa');
const addTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const deleteAll = document.querySelector('#apaga-tudo');
const deleteCompleted = document.querySelector('#remover-finalizados');
const saveTasks = document.querySelector('#salvar-tarefas');

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
  if (event.target.id !== 'lista-tarefas') {
    removeColor();
    event.target.style.backgroundColor = 'rgb(128,128,128)';
    event.target.classList.add('selected');
  }
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

taskList.addEventListener('dblclick', completedTask);

// Deletes all tasks
function removeTasks() {
  while (taskList.lastChild) {
    taskList.removeChild(taskList.lastChild);
  }
}

deleteAll.addEventListener('click', removeTasks);

// Deletes completed tasks
function removeCompleted() {
  for (let i = 0; i < taskList.childElementCount; i += 1) {
    const item = taskList.children[i];
    if (item.classList.contains('completed')) {
      taskList.removeChild(item);
      i -= 1;
    }
  }
}

deleteCompleted.addEventListener('click', removeCompleted);

// Saves task list and completed status to web storage
function saveList() {
  localStorage.clear();
  for (let i = 0; i < taskList.childElementCount; i += 1) {
    const item = taskList.children[i];
    localStorage.setItem(`${i}`, `${item.innerHTML}`);
    localStorage.setItem(`${i}${i}`, `${item.classList.contains('completed')}`);
  }
}

saveTasks.addEventListener('click', saveList);

// Retrieves tasks from web storage and assigns completed status
// Object.keys() source: https://stackoverflow.com/a/17748203/14424360
let savedTasks;
let completionStatus;

function retrieveItems() {
  savedTasks = [];
  completionStatus = [];
  for (let i = 0; i < (Object.keys(localStorage).length) / 2; i += 1) {
    savedTasks.push(localStorage.getItem(`${i}`));
    completionStatus.push(localStorage.getItem(`${i}${i}`));
  }
}

function isComplete(status, listItem) {
  if (status === 'true') {
    listItem.classList.add('completed');
  }
}

function generateFromStorage() {
  if (localStorage.getItem(0)) {
    retrieveItems();
    for (let i = 0; i < savedTasks.length; i += 1) {
      const listItem = document.createElement('li');
      listItem.innerText = savedTasks[i];
      isComplete(completionStatus[i], listItem);
      taskList.appendChild(listItem);
    }
  }
}

generateFromStorage();
