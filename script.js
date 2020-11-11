const addTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const tasksList = document.querySelector('#lista-tarefas');

addTaskButton.addEventListener("click", createTask);

function createTask() {
  const listItem = document.createElement('li');
  listItem.innerText = taskInput.value;
  tasksList.appendChild(listItem);
  taskInput.value = "";
}