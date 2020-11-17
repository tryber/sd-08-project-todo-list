function addTask(task, className, style) {
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  if (className !== null) {
    li.classList.add(className);
    li.style.textDecoration = style;
  }
  li.innerText = task;
  ol.appendChild(li);
}
function actionAddTask() {
  const btnAddTask = document.getElementById('criar-tarefa');
  const txtTask = document.getElementById('texto-tarefa');
  btnAddTask.addEventListener('click', function () {
    addTask(txtTask.value);
    txtTask.value = '';
  });
}
function setBackgroudItem(element) {
  const itens = document.getElementsByTagName('li');
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].style.backgroundColor = '';
    itens[i].classList.remove('selected');
  }
  element.style.backgroundColor = 'rgb(128, 128, 128)';
  element.classList.add('selected');
}

function setCompletedTask(element) {
  if (!element.classList.contains('completed')) {
    element.style.textDecoration = '';
  } else {
    element.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
}
function selectItem() {
  const itens = document.getElementById('lista-tarefas');
  itens.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
      setCompletedTask(event.target);
    } else {
      event.target.classList.add('completed');
      setCompletedTask(event.target);
    }
  });
  itens.addEventListener('click', function (event) {
    setBackgroudItem(event.target);
  });
}
function removeAllTasks() {
  const btnRemoveAll = document.getElementById('apaga-tudo');
  const taskList = document.getElementById('lista-tarefas');
  btnRemoveAll.addEventListener('click', function () {
    taskList.innerText = '';
  });
}
removeAllTasks();
function removeAllCompleted() {
  const btnRemoveCompleted = document.getElementById('remover-finalizados');
  btnRemoveCompleted.addEventListener('click', function () {
    const taskList = document.getElementsByClassName('completed');
    while (taskList.length > 0) {
      taskList[0].remove();
    }
  });
}
removeAllCompleted();
function generateListOfTasks() {
  const taskList = document.getElementById('lista-tarefas');
  const task = {
    task: '',
    completed: false,
  };
  const listOfTasks = [];
  for (let i = 0; i < taskList.children.length; i += 1) {
    const tempTask = Object.create(task);
    tempTask.task = taskList.children[i].innerText;
    if (taskList.children[i].classList.contains('completed')) {
      tempTask.completed = true;
    } else {
      tempTask.completed = false;
    }
    listOfTasks.push(tempTask);
  }
  return listOfTasks;
}

function saveTasks() {
  const btnSaveTasks = document.getElementById('salvar-tarefas');
  btnSaveTasks.addEventListener('click', function () {
    localStorage.setItem('listOfTasks', JSON.stringify(generateListOfTasks()));
  });
}
saveTasks();

function loadTasks() {
  const taskList = JSON.parse(localStorage.getItem('listOfTasks'));
  setTimeout(function () {
    for (let i = 0; i < taskList.length; i += 1) {
      if (taskList[i].completed === true) {
        const style = 'line-through solid rgb(0, 0, 0)';
        addTask(taskList[i].task, 'completed', style);
      } else {
        addTask(taskList[i].task);
      }
    }
  }, 3000);
}
function moveUp() {
  const ol = document.getElementById('lista-tarefas');
  const list = document.getElementsByTagName('li');
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].classList.contains('selected') && i !== 0) {
      ol.insertBefore(list[i], list[i - 1]);
      return;
    }
  }
}
function moveDown() {
  const ol = document.getElementById('lista-tarefas');
  const list = document.getElementsByTagName('li');
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].classList.contains('selected')) {
      ol.insertBefore(list[i], list[i + 2]);
      return;
    }
  }
}
function actionUp() {
  const btnUp = document.getElementById('mover-cima');
  btnUp.addEventListener('click', function () {
    moveUp();
  });
}
function actionDown() {
  const btnUp = document.getElementById('mover-baixo');
  btnUp.addEventListener('click', function () {
    moveDown();
  });
}
function removeSelected() {
  const btnRemoveSelected = document.getElementById('remover-selecionado');
  btnRemoveSelected.addEventListener('click', function () {
    const liSelected = document.querySelector('.selected');
    liSelected.remove();
  });
}
removeSelected();
actionUp();
actionDown();
window.onload = function () {
  loadTasks();
  selectItem();
  actionAddTask();
};
