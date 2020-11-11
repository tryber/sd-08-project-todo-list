// --------------- ELEMENT DEFINITIONS ---------------
const taskInput = document.querySelector('#texto-tarefa');
const addTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const deleteAll = document.querySelector('#apaga-tudo');
const deleteCompleted = document.querySelector('#remover-finalizados');
const deleteSelected = document.querySelector('#remover-selecionado');
const saveTasks = document.querySelector('#salvar-tarefas');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');

// --------------- MODULE 01 - ADD TO LIST ---------------
// Creates 'add to list' button functionality
function createListItem() {
  const listItem = document.createElement('li');
  listItem.innerText = taskInput.value;
  taskInput.value = '';
  taskList.appendChild(listItem);
}

addTask.addEventListener('click', createListItem);

// --------------- MODULE 02 - ITEM SELECTORS ---------------
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

// --------------- MODULE 03 - DELETE TASKS ---------------
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

// Deletes selected task
function removeSelected() {
  for (let i = 0; i < taskList.childElementCount; i += 1) {
    const item = taskList.children[i];
    if (item.classList.contains('selected')) {
      taskList.removeChild(item);
      break;
    }
  }
}

deleteSelected.addEventListener('click', removeSelected);

// --------------- MODULE 04 - SAVE AND RETRIEVE ---------------
// Stores each list items' innerHTML and completed status
function saveList() {
  localStorage.clear();
  for (let i = 0; i < taskList.childElementCount; i += 1) {
    const item = taskList.children[i];
    localStorage.setItem(`${i}`, `${item.innerHTML}`);
    localStorage.setItem(`${i}${i}`, `${item.classList.contains('completed')}`);
  }
}

saveTasks.addEventListener('click', saveList);

// Retrieves innerHTML and completion status and stores them in dedicated arrays
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
// Object.keys() source: https://stackoverflow.com/a/17748203/14424360

// Checks completion status of given list item based on retrieved info
function isComplete(status, listItem) {
  if (status === 'true') {
    listItem.classList.add('completed');
  }
}

// Rebuilds list from stored data
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

// ------------- MODULE 05 - MOVE ITEMS ---------------
// Moves item down if its selected and the movement is valid;
function upward(list, i) {
  if (list[i].classList.contains('selected')) {
    const selectedTask = list[i];
    const previousTask = list[i - 1];
    if (previousTask) {
      taskList.insertBefore(selectedTask, previousTask);
    }
    return true;
  }
  return false;
}

// Moves item up if its selected and the movement is valid;
function downward(list, i) {
  if (list[i].classList.contains('selected')) {
    const selectedTask = list[i];
    const nextTask = list[i + 1];
    if (nextTask) {
      taskList.insertBefore(nextTask, selectedTask);
    }
    return true;
  }
  return false;
}
// This was a bit hard to think of because there is no insertAfter method,
// but I ended up solving it by moving the element next to the selected one
// upward instead of moving the selected element downward. A break was
// necessary to make sure the upward movement only happened once, since after
// the first execution the function would reevaluate the 'selected' item as a
// true condition. And execute for all other iterations until the end of the
// loop.

// Looks for selected item and executes movement in chosen direction
function moveItem(direction) {
  const allTasks = taskList.children;
  for (let i = 0; i < allTasks.length; i += 1) {
    if (direction(allTasks, i)) {
      break;
    }
  }
}

moveUp.addEventListener('click', () => moveItem(upward));
moveDown.addEventListener('click', () => moveItem(downward));
