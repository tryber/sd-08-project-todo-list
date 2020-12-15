function toggleSelected(event) {
  const getTaskList = document.getElementsByClassName('task-list');
  for (let index = 0; index < getTaskList.length; index += 1) {
    getTaskList[index].classList.remove('selected');
    event.target.classList.add('selected');
    getTaskList[index] = event.target;
  }
}

function toggleCompleted(event) {
  event.target.classList.toggle('completed');
}

function createTaskList() {
  const getInput = document.getElementById('texto-tarefa');
  const createList = document.createElement('li');
  createList.innerText = getInput.value;
  createList.className = 'task-list';
  createList.addEventListener('dblclick', toggleCompleted);
  createList.addEventListener('click', toggleSelected);
  return createList;
}

const getButtonCreateTask = document.getElementById('criar-tarefa');
const getOrderedList = document.getElementById('lista-tarefas');
getButtonCreateTask.addEventListener('click', () => {
  const getInput = document.getElementById('texto-tarefa');
  const li = createTaskList();
  getOrderedList.appendChild(li);
  getInput.value = '';
});

const getButtonClearAll = document.getElementById('apaga-tudo');
getButtonClearAll.addEventListener('click', () => {
  getOrderedList.innerHTML = '';
});

const getButtonRemoveFinished = document.getElementById('remover-finalizados');
getButtonRemoveFinished.addEventListener('click', () => {
  const completedTask = document.getElementsByClassName('completed');
  for (let index = completedTask.length - 1; index >= 0; index -= 1) {
    completedTask[index].remove();
  }
});

