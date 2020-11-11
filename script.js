const body = document.querySelector('body');
const btnCreateTask = document.getElementById('criar-tarefa');
const tasksList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const colors = {
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
  }
  event.target.classList.add('selected');
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

// Setting the arrows to move the tasks up and down
// -----------------------------------------------------------------
btnArrowUp = document.getElementById('mover-cima');
btnArrowDown = document.getElementById('mover-baixo');

// Moving up
function moveTaskUp() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    const selectedTaskContent = selectedTask.innerHTML;
    const previousTask = selectedTask.previousElementSibling;
    const previousTaskContent = selectedTask.previousElementSibling.innerHTML;

    previousTask.innerHTML = selectedTaskContent;
    selectedTask.innerHTML = previousTaskContent;

    selectedTask.previousElementSibling.classList.add('selected');

    // Removing "selected" class from previous task
    let twoSelected = document.querySelectorAll('.selected');
    twoSelected[1].classList.remove('selected');
  }
}

// Moving Down
function moveTaskDown() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    const selectedTaskContent = selectedTask.innerHTML;
    const nextTask = selectedTask.nextElementSibling;
    const nextTaskContent = selectedTask.nextElementSibling.innerHTML;

    nextTask.innerHTML = selectedTaskContent;
    selectedTask.innerHTML = nextTaskContent;

    selectedTask.nextElementSibling.classList.add('selected');

    // Removing "selected" class from previous task
    let twoSelected = document.querySelectorAll('.selected');
    twoSelected[0].classList.remove('selected');
  }
}

btnArrowUp.addEventListener('click', moveTaskUp);
btnArrowDown.addEventListener('click', moveTaskDown);
// ------------------------------------------------------------------------

// Setting the button that deletes a single task
let btnClearTask = document.getElementById('remover-selecionado');

btnClearTask.addEventListener('click', function() {
	let selectedTask = document.querySelector('.selected');
	selectedTask.remove();
})

// Coloring the buttons
btnArrowUp.style.backgroundColor = colors.orange;
btnArrowDown.style.backgroundColor = colors.orange;
btnClearTask.style.backgroundColor = colors.red;
btnClearCompleted.style.backgroundColor = colors.blue;
btnCreateTask.style.backgroundColor = colors.green;
btnClearAll.style.backgroundColor = colors.red;
btnSaveTasks.style.backgroundColor = colors.green;

// Coloring Background
body.style.backgroundColor = colors.green;
