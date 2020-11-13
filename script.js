const taskList = document.getElementById('lista-tarefas');
taskList.innerHTML = localStorage.getItem('tasks');
const inputTask = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const btnClear = document.getElementById('apaga-tudo');
const btnSave = document.getElementById('salvar-tarefas');
const btnUp = document.getElementById('mover-cima');
const btnDown = document.getElementById('mover-baixo');

function adicionaTarefa() {
  btnAdd.addEventListener('click', function () {
    let task = document.createElement('li');
    task.innerHTML = inputTask.value;
    task.className = 'task';
    taskList.appendChild(task);
    inputTask.value = '';
    inputTask.style.backgroundColor = 'white';
  });
}
adicionaTarefa();

function apagaTudo() {
  btnClear.addEventListener('click', function () {
    taskList.innerHTML = ' ';
  });
}
apagaTudo();

function salvarTarefas() {
  btnSave.addEventListener('click', function () {
    localStorage.setItem('tasks', taskList.innerHTML);
  });
}
salvarTarefas();

function riscarTarefa() {
  taskList.addEventListener('dblclick', function (event) {
    event.target.style.textDecoration = 'line-through';
  });
}
riscarTarefa();

function highLightSelectedTask() {
  taskList.addEventListener('click', function (event) {
    if (
      event.target.style.backgroundColor !== 'rgb(128, 128, 128)' &&
      event.target.className === 'task'
    ) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      event.target.className = 'task selected';
    } else {
      event.target.style.backgroundColor = 'white';
      event.target.className = 'task';
    }
  });
}

highLightSelectedTask();

function moverCima() {
  btnUp.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
  });
}

function moverBaixo() {}

// Funções atoas:
function removeFirst() {
  const btnEraseLast = document.getElementById('apaga-primeira');
  btnEraseLast.addEventListener('click', function () {
    taskList.removeChild(taskList.firstElementChild);
  });
}
removeFirst();

function highlightInput() {
  inputTask.addEventListener('focus', function () {
    inputTask.style.backgroundColor = 'yellow';
  });
  inputTask.addEventListener('blur', function () {
    if (inputTask.value !== '') {
      inputTask.style.backgroundColor = 'yellow';
    } else {
      inputTask.style.backgroundColor = 'white';
    }
  });
}
highlightInput();

function highlightTaskMouseOver() {
  taskList.addEventListener('mouseover', function (event) {
    if (event.target.className === 'task') {
      if (event.target.style.border !== '1px solid black') {
        event.target.style.border = '1px solid black';
      }
    }
  });
}
highlightTaskMouseOver();
function hightLightTaskMouseOut() {
  taskList.addEventListener('mouseout', function (event) {
    if (event.target.className === 'task') {
      if (event.target.style.border === '1px solid black') {
        event.target.style.border = 'none';
      }
    }
  });
}
hightLightTaskMouseOut();
