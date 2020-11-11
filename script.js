function addTask() {
  const buttonAddTask = document.querySelector('#criar-tarefa');
  buttonAddTask.addEventListener('click', function () {
    const taskElement = document.createElement('li');
    taskElement.className = 'tarefa'
    taskElement.style.backgroundColor = 'white';
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
    if (task.target.style.backgroundColor === 'rgb(128, 128, 128)') {
    task.target.style.backgroundColor = 'white';
    } else {
      clearColorTask();
      task.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

taskColor();

function clearColorTask() {
  const listTask = document.querySelectorAll('.tarefa');
  for (let tag of listTask) {
    tag.style.backgroundColor = 'white';
  }
}


function taskCompleted() {
  const listTask = document.querySelector('#lista-tarefas');
  listTask.addEventListener('dblclick', function (solved) {
    if (solved.target.className === 'tarefa completed') {
      solved.target.className = 'tarefa';
    } else {
      solved.target.className = 'tarefa completed';
    }
  });
}

taskCompleted();


function createButtonClearList() {
  const buttonClearElement = document.createElement('button');
  buttonClearElement.id = 'apaga-tudo';
  buttonClearElement.innerHTML = 'Limpar Lista';
  buttonClearElement.className = 'botao-controle';
  const footerController = document.querySelector('.footer-controller');
  footerController.appendChild(buttonClearElement);
}

createButtonClearList();

function eventClearList() {
  const buttonClear = document.querySelector('#apaga-tudo');
  buttonClear.addEventListener('click', function () {
    const tasksList = document.querySelectorAll('.tarefa');
    const listElement = document.querySelector('#lista-tarefas');
    for (let tag of tasksList) {
      listElement.removeChild(tag);
    }
  });
}

eventClearList();

function createButtonRemoveSolved() {
  const buttonRemoveSolvedElement = document.createElement('button');
  buttonRemoveSolvedElement.id = 'remover-finalizados';
  buttonRemoveSolvedElement.innerHTML = 'Limpar completos';
  buttonRemoveSolvedElement.className = 'botao-controle';
  const footerController = document.querySelector('.footer-controller');
  footerController.appendChild(buttonRemoveSolvedElement);
}

createButtonRemoveSolved();

function eventRemoveSolved() {
  const buttonRemoveSolved = document.querySelector('#remover-finalizados');
  buttonRemoveSolved.addEventListener('click', function () {
    const tasksCompletedList = document.querySelectorAll('.completed');
    console.log(tasksCompletedList);
    const listElement = document.querySelector('#lista-tarefas');
    for (let tag of tasksCompletedList) {
      listElement.removeChild(tag);
    }
  });
}

eventRemoveSolved();

