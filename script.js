const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

addTaskButton.addEventListener('click', function () {
  const input = document.getElementById('texto-tarefa');
  const createLi = document.createElement('li');
  createLi.innerHTML = input.value;
  taskList.appendChild(createLi);
  input.value = ''
});
