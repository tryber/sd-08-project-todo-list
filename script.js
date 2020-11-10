const initialState = [
  { description: 'Primeira', selected: false, completed: false },
  { description: 'Segunda', selected: false, completed: false },
  { description: 'Terceira', selected: false, completed: false },
];

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || initialState;
const olTasks = document.getElementById('lista-tarefas');

function init() {
  for (let i = 0; i < savedTasks.length; i += 1) {
    const task = savedTasks[i];
    olTasks.appendChild(createTask(task));
  }
}

init();

function toggleSelected(event) {
  const tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task !== event.target) task.classList.remove('selected');
  }
  event.target.classList.toggle('selected');
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

const taskTextInput = document.getElementById('texto-tarefa');
const createTaskButton = document.getElementById('criar-tarefa');

// Cria uma nova tarefa e a adiciona a ol quando clicamos no botao
createTaskButton.addEventListener('click', function() {
  const taskDescription = taskTextInput.value;
  const task = createTask({ description: taskDescription });
  olTasks.appendChild(task);
  taskTextInput.value = "";
});

function eraseAllTasks() {
  const tasks = olTasks.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    task.remove();
  }
}

const eraseAllButton = document.getElementById('apaga-tudo');
eraseAllButton.addEventListener('click', eraseAllTasks);

function eraseCompletedTasks() {
  const completedTasks = olTasks.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i++) {
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
  if (!selected) return;
  const previous = selected.previousElementSibling;
  if (!previous) return;
  const parent = selected.parentNode;
  parent.insertBefore(selected, previous);
}

const moveUpButton = document.getElementById('mover-cima');
moveUpButton.addEventListener('click', moveUp);

function moveDown() {
  const selected = olTasks.querySelector('.selected');
  if (!selected) return;
  const next = selected.nextElementSibling;
  if (!next) return;
  const parent = selected.parentNode;
  parent.insertBefore(next, selected);
}

const moveDownButton = document.getElementById('mover-baixo');
moveDownButton.addEventListener('click', moveDown);

function removeSelected() {
  const selected = olTasks.querySelector('.selected');
  if (selected) {
    selected.remove();
  }
}

const removeSelectedButton = document.getElementById('remover-selecionado')
removeSelectedButton.addEventListener('click', removeSelected);
