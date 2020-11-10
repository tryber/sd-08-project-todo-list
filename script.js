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
window.onload = function () {
  actionAddTask();
};
