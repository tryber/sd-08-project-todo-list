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
  let tasksList = document.getElementsByTagName('li');

  let chosen = event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

const chosenTask = document.getElementById('lista-tarefas');
chosenTask.addEventListener('click', selectTask);

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

function deleteAll() {
  let listLength = document.getElementsByTagName('li').length;
  for (let index = 0; index < listLength; index += 1) {
    let toDelete = document.getElementById('lista-tarefas');
    toDelete.removeChild(toDelete.firstChild);
  }
}

const deleteAllTasks = document.getElementById('apaga-tudo');
deleteAllTasks.addEventListener('click', deleteAll);

function deleteCompleted() {
  let listLength = document.getElementsByTagName('li').length;
  for (let index = 0; index < listLength; index += 1) {
    let complete = document.getElementById('lista-tarefas');
    let deleteComplete = document.querySelector('.completed');
    complete.removeChild(deleteComplete);
  }
}

const deleteAllCompleted = document.getElementById('remover-finalizados');
deleteAllCompleted.addEventListener('click', deleteCompleted);
