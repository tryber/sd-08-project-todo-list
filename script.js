// Adicionar tarefa à lista
const addTaskButton = document.getElementById('criar-tarefa');
addTaskButton.addEventListener('click', () => {
  const taskList = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  const task = document.createElement('li');
  task.innerHTML = input.value;
  input.value = "";
  taskList.appendChild(task);
})
