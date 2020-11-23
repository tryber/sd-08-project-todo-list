const saveList = document.getElementById('lista-tarefas');
saveList.innerHTML = localStorage.getItem('list');

function addNewTask() {
  const list = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerHTML = document.getElementById('texto-tarefa').value;

  list.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

const addTask = document.querySelector('#criar-tarefa');
addTask.addEventListener('click', addNewTask);

function selectTask(event) {
  const chosen = document.querySelector('.selected');
  if (chosen === null) {
    event.target.classList.add('selected');
  } else {
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
  const listLength = document.getElementsByTagName('li').length;
  for (let index = 0; index < listLength; index += 1) {
    const toDelete = document.getElementById('lista-tarefas');
    toDelete.removeChild(toDelete.firstChild);
  }
}

const deleteAllTasks = document.getElementById('apaga-tudo');
deleteAllTasks.addEventListener('click', deleteAll);

function deleteCompleted() {
  const listLength = document.getElementsByClassName('completed').length;
  for (let index = 0; index < listLength; index += 1) {
    const complete = document.getElementById('lista-tarefas');
    complete.removeChild(document.querySelector('.completed'));
  }
}

const deleteAllCompleted = document.getElementById('remover-finalizados');
deleteAllCompleted.addEventListener('click', deleteCompleted);

function deleteChosenTask() {
  const chosen = document.querySelector('.selected');
  for (let index = 0; index < chosen.classList.length; index += 1) {
    if (chosen.classList[index] === 'selected') {
      const selected = document.getElementById('lista-tarefas');
      selected.removeChild(document.querySelector('.selected'));
    }
  }
}

const deleteChosen = document.getElementById('remover-selecionado');
deleteChosen.addEventListener('click', deleteChosenTask);

function saveTasks() {
  localStorage.setItem('list', saveList.innerHTML);
}

const save = document.getElementById('salvar-tarefas');
save.addEventListener('click', saveTasks);

function movingUp() {
  let item;
  const list = document.getElementsByTagName('li');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('selected')) {
      item = index;
    }
  }
  if (item > 0) {
    list[item].parentElement.insertBefore(list[item], list[item - 1]);
  }
// Aprendi a propriedade contains aqui após pegar a dica no PR do Massaki: https://www.w3schools.com/jsref/prop_element_classlist.asp
}

const moveUp = document.getElementById('mover-cima');
moveUp.addEventListener('click', movingUp);

function movingDown() {
  let item;
  const list = document.getElementsByTagName('li');

  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('selected')) {
      item = index + 1;
    }
  }
  if (item < (list.length)) {
    list[item].parentElement.insertBefore(list[item], list[item - 1]);
  }
// Peguei a dica no PR do Massaki para definir item = index + 1.
}

const moveDown = document.getElementById('mover-baixo');
moveDown.addEventListener('click', movingDown);
