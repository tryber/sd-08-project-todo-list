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
