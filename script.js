// DEFINING SELECTORS
const form = document.querySelector('#todo-list');
const inputTasks = document.querySelector('#texto-tarefa');
const listTasks = document.querySelector('#lista-tarefas');
const createTask = document.querySelector('#criar-tarefa');
const cleanTasks = document.querySelector('#apaga-tudo');
const removeFinishedTasks = document.querySelector('#remover-finalizados');

// EVENT LISTENERS
const eventListeners = () => {
  form.addEventListener('submit', createNewTask);
}
// CREATING A NEW TASK

const createNewTask = (event) => {
  event.preventDefault();

  if (inputTasks.value === '') {
    alert('Por favor, adicione uma tarefa!')
  }

  console.log(inputTasks.value);

  const li = document.createElement('li');

  li.appendChild(document.createTextNode(inputTasks.value));

  listTasks.appendChild(li);
}

eventListeners();

