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
chosenTask.addEventListener('click', selectTask);

function deselectTask() {
  for (let index in tasksList) {
    let tasksList = document.getElementsByTagName('li');
    tasksList[index].style.backgroundColor = 'none';
  }
  selectTask(newChosenTask);
}

const newChosenTask = document.getElementById('lista-tarefas');
newChosenTask.addEventListener('click', selectTask);

function completedTask(event) {
  if (event.target.className === 'completed') {
    let tryAgain = event.target.className = '';
  }
  else {
    let completed = event.target;
    completed.className = 'completed';
  }
}

const taskDone = document.getElementById('lista-tarefas');
taskDone.addEventListener('dblclick', completedTask);
