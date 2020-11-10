function toggleSelected(event) {
  event.target.classList.toggle('selected');
}

// Cria uma tarefa
function createTask(description) {
  const task = document.createElement('li');
  task.className = 'task';
  task.textContent = description;
  task.addEventListener('click', toggleSelected);
  return task;
}

const olTasks = document.getElementById('lista-tarefas');
const taskTextInput = document.getElementById('texto-tarefa');
const createTaskButton = document.getElementById('criar-tarefa');

// Cria uma nova tarefa e a adiciona a ol quando clicamos no botao
createTaskButton.addEventListener('click', function() {
  const taskDescription = taskTextInput.value;
  const task = createTask(taskDescription);
  olTasks.appendChild(task);
  taskTextInput.value = "";
});
