// DEFININES SELECTORS
const inputTasks = document.querySelector('#texto-tarefa');
const listTasks = document.querySelector('#lista-tarefas');
const listItem = document.querySelectorAll('.list-item');
const createTaskButton = document.querySelector('#criar-tarefa');
const cleanTasksButton = document.querySelector('#apaga-tudo');
const removeFinishedTasksButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');

// CREATES A NEW TASK
const createNewTask = (event) => {
  event.preventDefault();

  if (inputTasks.value === '') {
    return alert('Por favor, adicione uma tarefa!');
  }

  const li = document.createElement('li');
  li.classList.add('list-item');

  li.appendChild(document.createTextNode(inputTasks.value));

  inputTasks.value = '';

  return listTasks.appendChild(li);
}

createTaskButton.addEventListener('click', createNewTask);

// REMOVES PREVIOUS SELECTED TASKS
const removeSelectedTask = () => {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].classList.remove('selected');
  }
};

// SELECTS A SINGLE TASK
const selectSingleTask = (event) => {
  if (event.target.className !== 'selected') {
    removeSelectedTask();

    event.target.classList.add('selected');
  }
};

listTasks.addEventListener('click', selectSingleTask);

// COLORS A SINGLE TASK
const colorizeSelectedTask = () => {
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].classList.contains('selected')) {
      listItem[i].style.backgroundColor = 'rgb(128,128,128)';
    } else {
      listItem[i].style.backgroundColor = '';
    }
  }
};

listTasks.addEventListener('click', colorizeSelectedTask);

// COMPLETES A SINGLE TASK
const completeSingleTask = (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
};

listTasks.addEventListener('dblclick', completeSingleTask);
