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

function selectItem() {
  const itens = document.getElementById('lista-tarefas');
  itens.addEventListener('click', function (event) {
    setBackgroudItem(event.target);
  });
}

window.onload = function () {
  selectItem();
  actionAddTask();
};
