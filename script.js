const taskList = document.getElementById('lista-tarefas');
taskList.innerHTML = localStorage.getItem('tasks');
const inputTask = document.getElementById('texto-tarefa');
const btnAdd = document.getElementById('criar-tarefa');
const btnRmvFirst = document.getElementById('apaga-primeira');
const btnClear = document.getElementById('apaga-tudo');
const btnRmvSelected = document.getElementById('remover-selecionado');
const btnRmvFinished = document.getElementById('remover-finalizados');
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
    if (event.target.style.textDecoration !== 'line-through') {
      event.target.style.textDecoration = 'line-through';
      event.target.className = 'task completed';
    } else {
      event.target.style.textDecoration = 'none';
      event.target.classList.remove('completed');
    }
  });
}
riscarTarefa();
// Na função abaixo não se utilizou o index como normalmente (ex. finalizados[index]), pois,
// Cada vez que remove uma criança, o length diminui, e isso meio que quebra o código.
function removerFinalizadas() {
  btnRmvFinished.addEventListener('click', function () {
    let finalizados = document.getElementsByClassName('completed');
    for (let index = 0; index < finalizados.length; index += 1) {
      finalizados[0].parentNode.removeChild(finalizados[0]);
    }
  });
}
removerFinalizadas();

function highLightSelected() {
  let taskListChildren = taskList.children;
  taskList.addEventListener('click', function (event) {
    for (let index = 0; index < taskListChildren.length; index += 1) {
      if (taskListChildren[index] === event.target) {
        event.target.classList.add('selected');
        event.target.style.backgroundColor = 'rgb(128,128,128)';
      } else {
        taskListChildren[index].classList.remove('selected');
        taskListChildren[index].style.backgroundColor = 'white';
        taskListChildren[index].style.border = 'none';
      }
    }
  });
}
highLightSelected();

function moverCima() {
  btnUp.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
  });
}

function moverBaixo() {}

// Funções atoas:
function removeFirst() {
  btnRmvFirst.addEventListener('click', function () {
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
