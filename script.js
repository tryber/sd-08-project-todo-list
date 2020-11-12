// DEFININES SELECTORS
const inputTasks = document.querySelector('#texto-tarefa');
const listTasks = document.querySelector('#lista-tarefas');
const listItem = document.querySelectorAll('.list-item');
const createTaskButton = document.querySelector('#criar-tarefa');
const deleteTasksButton = document.querySelector('#apaga-tudo');
const deleteSelectedTasksButton = document.querySelector('#remover-selecionado');
const deleteFinishedTasksButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const listItemsArray = [];
let savedItemsArray = [];

// CREATES A NEW TASK
const createNewTask = () => {
  if (inputTasks.value === '') {
    return alert('Por favor, adicione uma tarefa!');
  }

  const li = document.createElement('li');
  li.classList.add('list-item');

  li.appendChild(document.createTextNode(inputTasks.value));

  listItemsArray.push(li);

  savedItemsArray.push(inputTasks.value);

  inputTasks.value = '';

  return listTasks.appendChild(li);
};

createTaskButton.addEventListener('click', createNewTask);

// REMOVES PREVIOUS SELECTED TASKS
const removeSelectedTask = () => {
  for (let i = 0; i < listItemsArray.length; i += 1) {
    listItemsArray[i].classList.remove('selected');
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
  for (let i = 0; i < listItemsArray.length; i += 1) {
    if (listItemsArray[i].classList.contains('selected')) {
      listItemsArray[i].style.backgroundColor = 'rgb(128,128,128)';
    } else {
      listItemsArray[i].style.backgroundColor = '';
    }
  }
};

listTasks.addEventListener('click', colorizeSelectedTask);

// COMPLETES A SINGLE TASK (MARKING WITH A LINE-THROUGH)
const completeSingleTask = (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
};

listTasks.addEventListener('dblclick', completeSingleTask);

// DELETE ALL LIST ITEMS
const deleteListItems = () => {
  while (listTasks.hasChildNodes()) {
    listTasks.removeChild(listTasks.firstChild);
  }

  localStorage.clear();
};

deleteTasksButton.addEventListener('click', deleteListItems);

// DELETE ONLY THE SELECTED ITEM
const deleteSelectedItems = () => {
  for (let i = 0; i < listItemsArray.length; i += 1) {
    if (listItemsArray[i].classList.contains('selected')) {
      listItemsArray[i].remove();
    }
  }
};

deleteSelectedTasksButton.addEventListener('click', deleteSelectedItems);

// DELETE ONLY FINISHED ITEMS
const deleteFinishedItems = () => {
  for (let i = 0; i < listItemsArray.length; i += 1) {
    if (listItemsArray[i].classList.contains('completed')) {
      listItemsArray[i].remove();
    }
  }
};

deleteFinishedTasksButton.addEventListener('click', deleteFinishedItems);

// SAVE LIST ITEMS IN THE LOCAL STORAGE
const storeListItems = () => {
  localStorage.setItem('tasks', JSON.stringify(savedItemsArray));
}

saveTasksButton.addEventListener('click', storeListItems);

// LOAD SAVED LIST ITEMS
const loadListItems = () => {
  savedItemsArray = JSON.parse(localStorage.getItem('tasks'));

  if (savedItemsArray !== null) {
    savedItemsArray.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('list-item');

      li.appendChild(document.createTextNode(item));

      listItemsArray.push(li);

      listTasks.appendChild(li);
    })
  }

  savedItemsArray = [];
};

loadListItems();

