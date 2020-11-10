const getButton = document.getElementById('criar-tarefa');
const getOrderedList = document.getElementById('lista-tarefas');

function createTaskList() {
  const getInput = document.getElementById('texto-tarefa');
  getButton.addEventListener('click', () => {
    const createList = document.createElement('li');
    createList.innerText = getInput.value;
    createList.className = 'task-list';
    getOrderedList.appendChild(createList);
  })
}
createTaskList();
