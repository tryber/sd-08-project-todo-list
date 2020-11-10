let inputTask = document.getElementById('texto-tarefa');
let todoList = document.getElementById('lista-tarefas');
let btnAdd = document.getElementById('criar-tarefa');

function setBackgroundColorGray(event) {
  event.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

function createTask(text) {
  let task = document.createElement('li');
  task.innerText = text;
  task.addEventListener('click', setBackgroundColorGray);
  return task;
}

function addTask() {
  let task = createTask(inputTask.value);
  todoList.appendChild(task);
  inputTask.value = '';
}

btnAdd.addEventListener('click', addTask);
