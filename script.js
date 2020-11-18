function addNewTask() {
  const list = document.getElementById('lista-tarefas');
  let newTask = document.createElement('li');
  newTask.innerHTML = document.getElementById('texto-tarefa').value;

  list.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

const addTask = document.querySelector('#criar-tarefa');
addTask.addEventListener('click', addNewTask);

function selectTask(event) {
  let chosen = event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

const chosenTask = document.getElementById('lista-tarefas');
chosenTask.addEventListener('click', selectTask)