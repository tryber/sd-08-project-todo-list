const body = document.querySelector('body');
const btnCreateTask = document.getElementById('criar-tarefa');
const tasksList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const colors = {
  gray: 'rgb(128, 128, 128)',
  red: '#de3f44',
  orange: '#f4a261',
  blue: '#0081ff',
  green: '#1ca345',
};

// Selecting the clicked task and deselecting the other ones
function selectTask(event) {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected) {
    taskSelected.classList.remove('selected');
    taskSelected.style.backgroundColor = '';
  }
  event.target.classList.add('selected');
  event.target.style.backgroundColor = colors.gray;
}

// Marking tasks as completed
function completedTask(event) {
  event.target.classList.toggle('completed');
}

// Adding a new task
function addTask() {
  const newTask = document.createElement('li');
  newTask.className = 'task';
  newTask.innerText = taskInput.value;
  taskInput.value = '';
  tasksList.appendChild(newTask);

  listenerForTasks();
}

function listenerForTasks() {
  const allTasks = document.querySelectorAll('.task');
  for (let task = 0; task < allTasks.length; task += 1) {
    allTasks[task].addEventListener('click', selectTask);
    allTasks[task].addEventListener('dblclick', completedTask);
  }
}

// Setting the button to add a new task and clean the input
btnCreateTask.addEventListener('click', addTask);

// Removing all tasks
const btnClearAll = document.getElementById('apaga-tudo');
btnClearAll.addEventListener('click', function (event) {
  let tasksList = document.getElementById('lista-tarefas');
  tasksList.innerHTML = '';
});

// Removing completed tasks
const btnClearCompleted = document.getElementById('remover-finalizados');
btnClearCompleted.addEventListener('click', removeCompleted);

function removeCompleted(event) {
  const allCompletedTasks = document.querySelectorAll('.completed');
  for (let task = 0; task < allCompletedTasks.length; task += 1) {
    allCompletedTasks[task].remove();
  }
}

// Recovering tasks from local storage
if (localStorage.tasksList) {
  tasksList.innerHTML = localStorage.tasksList;
  listenerForTasks();
}

// Saving current tasks list in local storage
const btnSaveTasks = document.getElementById('salvar-tarefas');

btnSaveTasks.addEventListener('click', function () {
  localStorage.tasksList = tasksList.innerHTML;
});

// Coloring the buttons
btnClearAll.style.backgroundColor = colors.red;
btnClearCompleted.style.backgroundColor = colors.blue;
btnCreateTask.style.backgroundColor = colors.green;
btnSaveTasks.style.backgroundColor = colors.green;
body.style.backgroundColor = colors.green;
