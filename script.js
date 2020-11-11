// DEFINING SELECTORS
const inputTasks = document.querySelector('#texto-tarefa');
const listTasks = document.querySelector('#lista-tarefas');
const createTask = document.querySelector('#criar-tarefa');
const cleanTasks = document.querySelector('#apaga-tudo');
const removeFinishedTasks = document.querySelector('#remover-finalizados');
const saveTasks = document.querySelector('#salvar-tarefas');

// EVENT LISTENERS
const eventListeners = () => {
  createTask.addEventListener('click', createNewTask);
  // cleanTasks.addEventListener('click', removeAllTasks);
  // saveTasks.addEvenetListener('click', saveAllTasks);
}
// CREATING A NEW TASK

const createNewTask = (event) => {
  event.preventDefault();

  if (inputTasks.value === '') {
    return alert('Por favor, adicione uma tarefa!');
  }

  const li = document.createElement('li');
  li.classList.add('list-item');

  li.appendChild(document.createTextNode(inputTasks.value));

  inputTasks.value = '';

  listTasks.appendChild(li);
}

eventListeners();
