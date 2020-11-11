const inputTask = document.getElementById('texto-tarefa');
const todoList = document.getElementById('lista-tarefas');
const btnAdd = document.getElementById('criar-tarefa');
const btnEraseAll = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
let selectedItem = '';

function selectItem(event) {
  if (selectedItem) {
    selectedItem.style.backgroundColor = '';
  }

  selectedItem = event.target;
  selectedItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

function completeTask(event) {
  const task = event.target;
  task.classList.toggle('completed');
}

function createTask(text) {
  const task = document.createElement('li');
  task.innerText = text;
  task.addEventListener('dblclick', completeTask);
  task.addEventListener('click', selectItem);
  return task;
}

function addTask() {
  const task = createTask(inputTask.value);
  todoList.append(task);
  inputTask.value = '';
}

// reference: https://attacomsian.com/blog/javascript-dom-remove-all-children-of-an-element
function eraseAll() {
  selectedItem = '';
  todoList.innerHTML = '';
}

function removeCompleted() {
  const completeds = document.querySelectorAll('.completed');

  for (let i = completeds.length - 1; i >= 0; i -= 1) {
    completeds[i].remove();
  }
}

btnAdd.addEventListener('click', addTask);
btnEraseAll.addEventListener('click', eraseAll);
btnRemoveCompleted.addEventListener('click', removeCompleted);
