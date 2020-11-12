// Função adiciona task e remove o conteúdo do input (ok!):
function adicionaTarefa() {
  const botaoAdd = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  botaoAdd.addEventListener('click', function () {
    let task = document.createElement('li');
    task.innerHTML = input.value;
    task.className = 'task';
    taskList.appendChild(task);
    input.value = '';
    input.style.backgroundColor = 'white';
  });
}
adicionaTarefa();

function highlightTask() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.addEventListener('mouseover', function (event) {
    if ((event.target.className === 'task')) {
      if (event.target.style.backgroundColor !== 'yellow') {
        event.target.style.backgroundColor = 'yellow';
      }
    }
  });
  taskList.addEventListener('mouseout', function (event) {
    if ((event.target.className === 'task')) {
      if (event.target.style.backgroundColor === 'yellow') {
        event.target.style.backgroundColor = 'white';
      }
    }
  });
}
highlightTask();

function moverCima() {
  const btnUp = document.getElementById('mover-cima');
  btnUp.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
  });
}

function moverBaixo() {
  const btnDown = document.getElementById('mover-baixo');
}

// Funções atoas:
function removeFirst() {
  const btnEraseLast = document.getElementById('remover-selecionado');
  btnEraseLast.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
    taskList.removeChild(taskList.firstElementChild);
  });
}
removeFirst();

function highlightInput() {
  const taskList = document.getElementById('lista-tarefas');
  const inputPlace = document.getElementById('texto-tarefa');
  inputPlace.addEventListener('focus', function () {
    inputPlace.style.backgroundColor = 'yellow';
  });
  inputPlace.addEventListener('blur', function () {
    if (inputPlace.value !== '') {
      inputPlace.style.backgroundColor = 'yellow';
    } else {
      inputPlace.style.backgroundColor = 'white';
    }
  });
}
highlightInput();
