const inputTask = document.querySelector('#texto-tarefa');
const createTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskItem = document.querySelectorAll('.task');

const submitTask = () => {
  if (inputTask.value === '') {
    return alert('Insira um valor válido para sua task!!');
  }
  const taskListElement = document.createElement('li');
  taskListElement.className = 'task';
  taskListElement.innerText = inputTask.value;
  inputTask.value = '';
  return taskList.appendChild(taskListElement);
};

createTask.addEventListener('click', submitTask);
