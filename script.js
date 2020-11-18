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
  event.target.classList.toggle('completed');
// Aprendi toggle aqui: https://www.w3schools.com/howto/howto_js_toggle_class.asp
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
  let listLength = document.getElementsByClassName('completed').length;
  for (let index = 0; index < listLength; index += 1) {
    let complete = document.getElementById('lista-tarefas');
    complete.removeChild(document.querySelector('.completed'));
  }
}

const deleteAllCompleted = document.getElementById('remover-finalizados');
deleteAllCompleted.addEventListener('click', deleteCompleted);

function deleteChosenTask() {
  let chosen = document.querySelector('.selected');
  for (let index = 0; index < chosen.classList.length; index += 1) {
    if (chosen.classList[index] === 'selected') {
      let selected = document.getElementById('lista-tarefas');
      selected.removeChild(document.querySelector('.selected'));
    }
  }
}

const deleteChosen = document.getElementById('remover-selecionado');
deleteChosen.addEventListener('click', deleteChosenTask);
