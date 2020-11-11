const getButton = document.getElementById('criar-tarefa');
const getOrderedList = document.getElementById('lista-tarefas');
const getTaskList = document.getElementsByClassName('task-list');
const getInput = document.getElementById('texto-tarefa');

function toggleSelected(event) {
  for (let i = 0; i < getTaskList.length; i += 1) {
    getTaskList[i].classList.remove('selected');
    event.target.classList.add('selected');
    getTaskList[i] = event.target;
  }
}

function toggleCompleted(event) {
  event.target.classList.toggle('completed');
}

function createTaskList() {
  const createList = document.createElement('li');
  createList.innerText = getInput.value;
  createList.className = 'task-list';
  createList.addEventListener('dblclick', toggleCompleted);
  createList.addEventListener('click', toggleSelected);
  return createList;
}

getButton.addEventListener('click', () => {
  const li = createTaskList();
  getOrderedList.appendChild(li);
  getInput.value = '';
});
