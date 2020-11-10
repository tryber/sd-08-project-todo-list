let inputTask = document.getElementById('texto-tarefa');
let todoList = document.getElementById('lista-tarefas');
let btnAdd = document.getElementById('criar-tarefa');
let selectedItem;

function selectItem(event) {
  if (selectedItem) {
    selectedItem.style.backgroundColor = '';
  }

  selectedItem = event.target;
  selectedItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

function completeTask(event) {
  event.target.classList.add('completed');
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
  todoList.appendChild(task);
  inputTask.value = '';
}

btnAdd.addEventListener('click', addTask);
