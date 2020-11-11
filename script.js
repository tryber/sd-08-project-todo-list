// DEFINING SELECTORS
const inputTasks = document.querySelector('#texto-tarefa');
const listTasks = document.querySelector('#lista-tarefas');
const listItem = document.querySelectorAll('.list-item');
const createTaskButton = document.querySelector('#criar-tarefa');
const cleanTasksButton = document.querySelector('#apaga-tudo');
const removeFinishedTasksButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');

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

  return listTasks.appendChild(li);
}

createTaskButton.addEventListener('click', createNewTask);

// REMOVING PREVIOUS SELECTED TASK
const removeSelectedTask = () => {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].classList.remove('selected');
  }
};

// SELECTING A SINGLE TASK
const selectSingleTask = (event) => {
  if (event.target.className !== 'selected') {
    removeSelectedTask();

    event.target.classList.add('selected');
  }
};

listTasks.addEventListener('click', selectSingleTask);

// COLORIZING A SINGLE TASK
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
