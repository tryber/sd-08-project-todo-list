let inputTask = document.getElementById('texto-tarefa');
let todoList = document.getElementById('lista-tarefas');
let btnAdd = document.getElementById('criar-tarefa');
let btnEraseAll = document.getElementById('apaga-tudo');
let btnRemoveCompleted = document.getElementById('remover-finalizados');
let selectedItem = '';

function selectItem(event) {
  if (selectedItem) {
    selectedItem.style.backgroundColor = '';
  }

  selectedItem = event.target;
  selectedItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

function completeTask(event) {
  let task = event.target;
  task.classList.toggle('completed');
}

function createTask(text) {
  let task = document.createElement('li');
  task.innerText = text;
  task.addEventListener('dblclick', completeTask);
  task.addEventListener('click', selectItem);
  return task;
}

function addTask() {
  let task = createTask(inputTask.value);
  todoList.append(task);
  inputTask.value = '';
}

// reference: https://attacomsian.com/blog/javascript-dom-remove-all-children-of-an-element
function eraseAll() {
  selectedItem = '';
  todoList.innerHTML = '';
}

function removeCompleted() {
  let completeds = document.querySelectorAll('.completed');

  for (let i = completeds.length - 1; i >= 0; i -= 1) {
    completeds[i].remove();
  }
}

btnAdd.addEventListener('click', addTask);
btnEraseAll.addEventListener('click', eraseAll);
btnRemoveCompleted.addEventListener('click', removeCompleted);
