const getButtonCreateTask = document.getElementById('criar-tarefa');
const getButtonClearAll = document.getElementById('apaga-tudo');
const getButtonRemoveFinished = document.getElementById('remover-finalizados');
const getOrderedList = document.getElementById('lista-tarefas');
const getTaskList = document.getElementsByClassName('task-list');
const getInput = document.getElementById('texto-tarefa');

function createTaskList() {
  const createList = document.createElement('li');
  createList.innerText = getInput.value;
  createList.className = 'task-list';
  createList.addEventListener('dblclick', toggleCompleted);
  createList.addEventListener('click', toggleSelected);
  return createList;
}

getButtonCreateTask.addEventListener('click', () => {
  const li = createTaskList();
  getOrderedList.appendChild(li);
  getInput.value = '';
});

function toggleSelected(event) {
  for (let index = 0; index < getTaskList.length; index += 1) {
    getTaskList[index].classList.remove('selected');
    event.target.classList.add('selected');
    getTaskList[index] = event.target;
  }
}

function toggleCompleted(event) {
  event.target.classList.toggle('completed');
}

getButtonClearAll.addEventListener('click', () => {
  getOrderedList.innerHTML = '';
});

getButtonRemoveFinished.addEventListener('click', () => {
  let completedTask = document.getElementsByClassName('completed');
  for (let index = completedTask.length - 1; index >= 0; index -= 1) {
    completedTask[index].remove();
  }
});
