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
    if (event.target.classList.contains('completed') === false) {
      event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      event.target.classList.add('completed');
    } else {
      event.target.style.textDecoration = 'none';
      event.target.classList.remove('completed');
    }
  });
}
riscarTarefa();

function removerFinalizadas() {
  btnRmvFinished.addEventListener('click', function () {
    let finalizados = document.getElementsByClassName('completed');
    for (let index = 0; index < finalizados.length; index += 1) {
      finalizados[0].parentNode.removeChild(finalizados[0]);
    }
  });
}
removerFinalizadas();
// Na função acima não se utilizou o index como normalmente (finalizados[index]), pois,
// Cada vez que remove uma 'criança', o length diminui, e isso meio que quebra o código
// Se utilizar o [index].

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

function removeSelected() {
  btnRmvSelected.addEventListener('click', function () {
    for (let index = 0; index < taskList.children.length; index += 1) {
      if (taskList.children[index].classList.contains('selected') === true) {
        taskList.removeChild(taskList.children[index]);
      }
    }
  });
}
removeSelected();

function moverCima() {
  btnDown.addEventListener('click', function () {
    const childNode = document.querySelectorAll('.task');
    let selected;
    for (let index = 0; index < childNode.length; index += 1) {
      if (childNode[index].classList.contains('selected')) {
        selected = index;
      }
    }
    if (selected > 0) {
      childNode[selected].parentElement.insertBefore(
        childNode[selected],
        childNode[selected - 1],
      );
      // Solução encontrada no site 'https://stackoverflow.com/questions/9732624/how-to-swap-dom-child-nodes-in-javascript'
    }
  });
}
moverCima();

function moverBaixo() {
  btnDown.addEventListener('click', function () {
    const childNode = document.querySelectorAll('.task');
    let selected;
    for (let index = 0; index < childNode.length; index += 1) {
      if (childNode[index].classList.contains('selected')) {
        selected = index + 1;
      }
    }
    if (selected < childNode.length) {
      childNode[selected].parentElement.insertBefore(
        childNode[selected],
        childNode[selected - 1],
      );
    }
  });
}

moverBaixo();

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

function enterAddsTask() {
  inputTask.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.wich === '113') {
      adicionaTarefa();
    }
  });
}
enterAddsTask();
