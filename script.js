window.onload = function () {
  if (localStorage.taskList) {
    const tasksCompletedList = document.querySelector('#lista-tarefas');
    tasksCompletedList.innerHTML = localStorage.taskList;
  }
};

function clearInput() {
  const inputTask = document.querySelector('#texto-tarefa');
  inputTask.value = '';
}

function addTask() {
  const buttonAddTask = document.querySelector('#criar-tarefa');
  buttonAddTask.addEventListener('click', function () {
    const taskElement = document.createElement('li');
    taskElement.className = 'tarefa';
    const inputTask = document.querySelector('#texto-tarefa');
    taskElement.innerHTML = inputTask.value;
    const listTask = document.querySelector('#lista-tarefas');
    listTask.appendChild(taskElement);
    clearInput();
  });
}

addTask();

function clearColorTask() {
  const listTask = document.querySelectorAll('.tarefa');
  for (let index = 0; index < listTask.length; index += 1) {
    if (listTask[index].classList.contains('selected')) {
      listTask[index].classList.remove('selected');
    }
  }
}

function taskSelected() {
  const listTask = document.querySelector('#lista-tarefas');
  listTask.addEventListener('click', function (task) {
    clearColorTask();
    task.target.classList.add('selected');
  });
}

taskSelected();


function taskCompleted() {
  const listTask = document.querySelector('#lista-tarefas');
  listTask.addEventListener('dblclick', function (solved) {
    if (solved.target.classList.contains('completed')) {
      solved.target.classList.remove('completed');
    } else {
      solved.target.classList.add('completed');
    }
  });
}

taskCompleted();

function createButtonClearSelected() {
  const buttonClearSelectedElement = document.createElement('button');
  buttonClearSelectedElement.id = 'remover-selecionado';
  buttonClearSelectedElement.innerHTML = 'X';
  buttonClearSelectedElement.className = 'botao-controle';
  buttonClearSelectedElement.style.backgroundColor = 'rgb(150, 0, 0)';
  buttonClearSelectedElement.style.font = '20px';
  const footerController = document.querySelector('.footer-controller');
  footerController.appendChild(buttonClearSelectedElement);
}

createButtonClearSelected();

const buttonClearSelected = document.querySelector('#remover-selecionado');
buttonClearSelected.addEventListener('click', function () {
  const tasksList = document.querySelector('.selected');
  const listElement = document.querySelector('#lista-tarefas');
  listElement.removeChild(tasksList);
});

function createButttonUp() {
  const buttonUpElement = document.createElement('button');
  buttonUpElement.id = 'mover-cima';
  buttonUpElement.innerHTML = '&uarr;';
  buttonUpElement.className = 'botao-controle';
  buttonUpElement.style.backgroundColor = 'rgb(255, 69, 0)';
  buttonUpElement.style.font = '20px bold';
  const footerController = document.querySelector('.footer-controller');
  footerController.appendChild(buttonUpElement);
}

createButttonUp();

const buttonUp = document.querySelector('#mover-cima');
buttonUp.addEventListener('click', function () {
  const task = document.querySelector('.selected');
  if (task !== null) {
    const before = document.querySelector('.selected').previousElementSibling;
    if (before !== null) {
      before.insertAdjacentElement('beforebegin', task);
    }
  }
});

function createButttonDown() {
  const buttonDownElement = document.createElement('button');
  buttonDownElement.id = 'mover-baixo';
  buttonDownElement.innerHTML = '&darr;';
  buttonDownElement.className = 'botao-controle';
  buttonDownElement.style.backgroundColor = 'rgb(255, 69, 0)';
  buttonDownElement.style.font = '20px bold';
  const footerController = document.querySelector('.footer-controller');
  footerController.appendChild(buttonDownElement);
}

createButttonDown();

const buttonDown = document.querySelector('#mover-baixo');
buttonDown.addEventListener('click', function () {
  const task = document.querySelector('.selected');
  if (task !== null) {
    const after = document.querySelector('.selected').nextElementSibling;
    if (after !== null) {
      after.insertAdjacentElement('afterend', task);
    }
  }
});

function createButtonRemoveSolved() {
  const buttonRemoveSolvedElement = document.createElement('button');
  buttonRemoveSolvedElement.id = 'remover-finalizados';
  buttonRemoveSolvedElement.innerHTML = 'Limpar Completos';
  buttonRemoveSolvedElement.className = 'botao-controle';
  buttonRemoveSolvedElement.style.backgroundColor = 'rgb(0, 174, 255)';
  const footerController = document.querySelector('.footer-controller');
  footerController.appendChild(buttonRemoveSolvedElement);
}

createButtonRemoveSolved();

function eventRemoveSolved() {
  const buttonRemoveSolved = document.querySelector('#remover-finalizados');
  buttonRemoveSolved.addEventListener('click', function () {
    const tasksCompletedList = document.querySelectorAll('.completed');
    const listElement = document.querySelector('#lista-tarefas');
    for (let index = 0; index < tasksCompletedList.length; index += 1) {
      listElement.removeChild(tasksCompletedList[index]);
    }
  });
}

eventRemoveSolved();

function createButtonClearList() {
  const buttonClearElement = document.createElement('button');
  buttonClearElement.id = 'apaga-tudo';
  buttonClearElement.innerHTML = 'Limpar Lista';
  buttonClearElement.className = 'botao-controle';
  buttonClearElement.style.backgroundColor = 'rgb(150, 0, 0)';
  const footerController = document.querySelector('.footer-controller');
  footerController.appendChild(buttonClearElement);
}

createButtonClearList();

function eventClearList() {
  const buttonClear = document.querySelector('#apaga-tudo');
  buttonClear.addEventListener('click', function () {
    const tasksList = document.querySelectorAll('.tarefa, .selected');
    const listElement = document.querySelector('#lista-tarefas');
    for (let index = 0; index < tasksList.length; index += 1) {
      listElement.removeChild(tasksList[index]);
    }
  });
}

eventClearList();

function createButtonSaveTask() {
  const buttonSaveTaskElement = document.createElement('button');
  buttonSaveTaskElement.id = 'salvar-tarefas';
  buttonSaveTaskElement.innerHTML = 'Salvar Lista';
  buttonSaveTaskElement.className = 'botao-controle';
  buttonSaveTaskElement.style.backgroundColor = 'rgb(0, 194, 120)';
  const footerController = document.querySelector('.footer-controller');
  footerController.appendChild(buttonSaveTaskElement);
}

createButtonSaveTask();

function eventSaveTask() {
  const buttonSaveTask = document.querySelector('#salvar-tarefas');
  buttonSaveTask.addEventListener('click', function () {
    const tasksCompletedList = document.querySelector('#lista-tarefas');
    localStorage.setItem('taskList', tasksCompletedList.innerHTML);
  });
}

eventSaveTask();
