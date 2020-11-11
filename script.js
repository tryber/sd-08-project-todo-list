const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
const olTasks = document.getElementById('lista-tarefas');

function toggleSelected(event) {
  const tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i += 1) {
    const task = tasks[i];
    if (task !== event.target) task.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function toggleCompleted(event) {
  event.target.classList.toggle('completed');
}

// Cria uma tarefa
function createTask(newTask) {
  const { description, selected = false, completed = false } = newTask;
  const task = document.createElement('li');
  task.className = 'task';
  task.textContent = description;
  if (selected) task.classList.add('selected');
  if (completed) task.classList.add('completed');
  task.addEventListener('click', toggleSelected);
  task.addEventListener('dblclick', toggleCompleted);
  return task;
}

function init() {
  for (let i = 0; i < savedTasks.length; i += 1) {
    const task = savedTasks[i];
    olTasks.appendChild(createTask(task));
  }
}

init();

const taskTextInput = document.getElementById('texto-tarefa');
const createTaskButton = document.getElementById('criar-tarefa');

function createTaskHandler() {
  const taskDescription = taskTextInput.value;
  if (taskDescription) {
    const task = createTask({ description: taskDescription });
    olTasks.appendChild(task);
    taskTextInput.value = '';
  }
}

taskTextInput.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') createTaskHandler();
});

// Cria uma nova tarefa e a adiciona a ol quando clicamos no botao
createTaskButton.addEventListener('click', createTaskHandler);

function eraseAllTasks() {
  const tasks = olTasks.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    const task = tasks[i];
    task.remove();
  }
}

const eraseAllButton = document.getElementById('apaga-tudo');
eraseAllButton.addEventListener('click', eraseAllTasks);

function eraseCompletedTasks() {
  const completedTasks = olTasks.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i += 1) {
    const task = completedTasks[i];
    task.remove();
  }
}

const eraseCompletedButton = document.getElementById('remover-finalizados');
eraseCompletedButton.addEventListener('click', eraseCompletedTasks);

function saveTasks() {
  const tasksObjArray = [];
  const tasks = olTasks.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i += 1) {
    const task = tasks[i];
    const taskObj = Object.create(null);
    taskObj.description = task.textContent;
    taskObj.selected = task.classList.contains('selected');
    taskObj.completed = task.classList.contains('completed');
    tasksObjArray.push(taskObj);
  }
  localStorage.setItem('tasks', JSON.stringify(tasksObjArray));
}

const saveTasksButton = document.getElementById('salvar-tarefas');
saveTasksButton.addEventListener('click', saveTasks);

function moveUp() {
  const selected = olTasks.querySelector('.selected');
  if (selected && selected.previousElementSibling) {
    const previous = selected.previousElementSibling;
    const parent = selected.parentNode;
    parent.insertBefore(selected, previous);
  }
}

const moveUpButton = document.getElementById('mover-cima');
moveUpButton.addEventListener('click', moveUp);

function moveDown() {
  const selected = olTasks.querySelector('.selected');
  if (selected && selected.nextElementSibling) {
    const next = selected.nextElementSibling;
    const parent = selected.parentNode;
    parent.insertBefore(next, selected);
  }
}

const moveDownButton = document.getElementById('mover-baixo');
moveDownButton.addEventListener('click', moveDown);

function removeSelected() {
  const selected = olTasks.querySelector('.selected');
  if (selected) selected.remove();
}

const removeSelectedButton = document.getElementById('remover-selecionado');
removeSelectedButton.addEventListener('click', removeSelected);
