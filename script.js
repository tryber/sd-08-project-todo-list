let addTaskButton = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas')

addTaskButton.addEventListener('click', function () {
  let input = document.getElementById('texto-tarefa');
  let createLi = document.createElement('li');
  createLi.innerHTML = input.value;
  taskList.appendChild(createLi);
  input.value = ""
});