const btnCreateTask = document.getElementById('criar-tarefa');
const tasksList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const colors = {
  gray: 'rgb(128, 128, 128)',
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
  const allTasks = document.querySelectorAll('.task');
  for (let task = 0; task < allTasks.length; task += 1) {
    allTasks[task].addEventListener('click', selectTask);
    allTasks[task].addEventListener('dblclick', completedTask);
  }
}

// Setting the button to add a new task and clean the input
btnCreateTask.addEventListener('click', addTask);
