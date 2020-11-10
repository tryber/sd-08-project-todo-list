let inputTask = document.getElementById('texto-tarefa');
let todoList = document.getElementById('lista-tarefas');
let btnAdd = document.getElementById('criar-tarefa');

function createTask(text) {
  let task = document.createElement('li');
  task.innerText = text;
  return task;
}

function addTask() {
  let task = createTask(inputTask.value);
  todoList.appendChild(task);
  inputTask.value = '';
}

btnAdd.addEventListener('click', addTask);
