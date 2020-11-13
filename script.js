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
    const task = document.createElement('li');
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
    const finalizados = document.querySelectorAll('.completed');
    for (let index = 0; index < finalizados.length; index += 1) {
      finalizados[index].parentNode.removeChild(finalizados[index]);
    }
  });
}
removerFinalizadas();

function highLightSelected() {
  const taskListChildren = taskList.children;
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
  btnUp.addEventListener('click', function () {
    const parametreNode = document.querySelectorAll('.task');
    let selected;
    for (let index = 0; index < parametreNode.length; index += 1) {
      if (parametreNode[index].classList.contains('selected')) {
        selected = index;
      }
    }
    if (selected > 0) {
      parametreNode[selected].parentElement.insertBefore(
        parametreNode[selected],
        parametreNode[selected - 1],
      );
      // Solução obtida através de 'https://stackoverflow.com/questions/9732624/how-to-swap-dom-child-nodes-in-javascript'
    }
  });
}
moverCima();

function moverBaixo() {
  btnDown.addEventListener('click', function () {
    const parametreNode = document.querySelectorAll('.task');
    let selected;
    for (let index = 0; index < parametreNode.length; index += 1) {
      if (parametreNode[index].classList.contains('selected')) {
        selected = index + 1;
      }
    }
    if (selected < parametreNode.length) {
      parametreNode[selected].parentElement.insertBefore(
        parametreNode[selected],
        parametreNode[selected - 1],
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

// function enterAddsTask() {
//   inputTask.addEventListener('keyup', function (event) {
//     eventKeyString = event.key.toString();
//     console.log('You have pressed key: ' + event.key);
//     console.log(eventKeyString);
//     event.preventDefault();
//     if (eventKeyString === 'ArrowDown') {
//       let task = document.createElement('li');
//       task.innerHTML = inputTask.value;
//       task.className = 'task';
//       taskList.appendChild(task);
//       inputTask.value = '';
//       inputTask.style.backgroundColor = 'white';
//     }
//   });
// }
// enterAddsTask();
