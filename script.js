function addTask() {
  const buttonAddTask = document.querySelector('#criar-tarefa');
  buttonAddTask.addEventListener('click', function (task) {
    const taskElement = document.createElement('li');
    const inputTask = document.querySelector('#texto-tarefa');
    taskElement.innerHTML = inputTask.value;
    const listTask = document.querySelector('#lista-tarefas');  
    listTask.appendChild(taskElement);
    clearInput();
  });
}

addTask();

function clearInput() {
  const inputTask = document.querySelector('#texto-tarefa');
  inputTask.value = '';  
}
