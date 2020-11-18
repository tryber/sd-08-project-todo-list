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
  let chosen = document.querySelector('.selected');
  if (chosen === null) {
    event.target.classList.add('selected');
  }
  else {
    chosen.style.backgroundColor = 'none';
    chosen.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

const chosenTask = document.getElementById('lista-tarefas');
chosenTask.addEventListener('click', selectTask);

function completedTask(event) {
  let length = document.querySelectorAll('.completed').length;
  for (let index = 0; index < length; index += 1) {
    if (event.target.classList[index] === 'completed') {
      let tryAgain = event.target.classList.remove('completed');
    } 
  }
  if (length === 0) {
    let completed = event.target;
    completed.classList.add('completed');
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

function deleteChosenTask() {
  let chosen = document.getElementsByTagName('li').style.backgroundColor;
  if (chosen === 'rgb(128, 128, 128)') {
    let selected = document.getElementById('lista-tarefas');
    selected.removeChild(selected.nodeValue);
  }
}

const deleteChosen = document.getElementById('remover-selecionado');
deleteChosen.addEventListener('click', deleteChosenTask);
