window.onload = function () {
  if(localStorage.taskList) {
    const tasksCompletedList = document.querySelector('#lista-tarefas');
    tasksCompletedList.innerHTML = localStorage.taskList;
  }
}

function addTask() {
  const buttonAddTask = document.querySelector('#criar-tarefa');
  buttonAddTask.addEventListener('click', function () {
    const taskElement = document.createElement('li');
    taskElement.className = 'tarefa'
    const inputTask = document.querySelector('#texto-tarefa');
    taskElement.innerHTML = inputTask.value;
    const listTask = document.querySelector('#lista-tarefas');  
    listTask.appendChild(taskElement);
    clearInput();
  });
}

addTask();

function clearInput() {
  const inputTask = document.querySelector('#texto-tarefa');
  inputTask.value = '';  
}

function taskColor() {
  const listTask = document.querySelector('#lista-tarefas');
  listTask.addEventListener('click', function (task) {
    if (task.target.className == 'selected completed') {
      clearColorTask();
      task.target.className = 'tarefa completed';
    } else if (task.target.className == 'tarefa') {
      clearColorTask();
      task.target.className = 'selected';
    } else if (task.target.className == 'tarefa completed') {
      clearColorTask();
      task.target.className = 'selected completed';
    }
  });
}

taskColor();

function clearColorTask() {
  const listTask = document.querySelectorAll('.selected');
  for (let tag of listTask) {
    if (tag.className == 'selected completed')
      tag.className = 'tarefa completed';
    else
      tag.className = 'tarefa';
  }
}

function taskCompleted() {
  const listTask = document.querySelector('#lista-tarefas');
  listTask.addEventListener('dblclick', function (solved) {
    if (solved.target.className == 'selected completed')
      solved.target.className = 'selected';
    if (solved.target.className == 'tarefa completed')
      solved.target.className = 'tarefa';
    else
      solved.target.className += ' completed';
  });
}

taskCompleted();

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

const buttonUp = document.querySelector('#mover-cima')
buttonUp.addEventListener('click', function () {
  const listTask = document.querySelector('.selected');
  if (listTask !== null) {
    const antes = document.querySelector('.selected').previousElementSibling;
    if (antes !== null) {
      antes.insertAdjacentElement('beforebegin', listTask);
    }
  }
})


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

const buttonDown = document.querySelector('#mover-baixo')
buttonDown.addEventListener('click', function () {
  const listTask = document.querySelector('.selected');
  if (listTask !== null) {
    const depois = document.querySelector('.selected').nextElementSibling;
    if (depois !== null) {
      depois.insertAdjacentElement('afterend', listTask);
    }
  }
})

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
    for (let tag of tasksCompletedList) {
      listElement.removeChild(tag);
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
    for (let tag of tasksList) {
      listElement.removeChild(tag);
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
    console.log(localStorage.taskList);
  });
}

eventSaveTask();

