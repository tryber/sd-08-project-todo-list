function addTask(task) {
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
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
  }
  element.style.backgroundColor = 'rgb(128, 128, 128)';
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
window.onload = function () {
  selectItem();
  actionAddTask();
};
