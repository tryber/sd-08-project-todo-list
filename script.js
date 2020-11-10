const btnCreateTask = document.getElementById('criar-tarefa');
const tasksList = document.getElementById('lista-tarefas');
let taskInput = document.getElementById('texto-tarefa');

// Setting the button to add a new task and clean the input
btnCreateTask.addEventListener('click', function () {
  const newTask = document.createElement('li');
  newTask.innerText = taskInput.value;
  taskInput.value = '';
  tasksList.appendChild(newTask);
});
