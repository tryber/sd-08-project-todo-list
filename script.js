function addTask() {
  const buttonAddTask = document.getElementById('criar-tarefa');
  buttonAddTask.addEventListener('click', function () {
    let taskItem = document.getElementById('texto-tarefa');
    let taskList = document.getElementById('lista-tarefas');
    let newTaskItem = document.createElement('li');
    newTaskItem.classList.add('task-style');
    newTaskItem.addEventListener('click', changeLiClassColor);
    newTaskItem.addEventListener('dblclick', completedTaskClass);
    taskList.appendChild(newTaskItem);
    newTaskItem.innerText = taskItem.value;
    taskItem.value = '';
  });
}
addTask();

let liArray = document.getElementsByClassName('task-style');

function changeLiClassColor(event) {  
  for (let index = 0; index < liArray.length; index += 1) {
    liArray[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function completedTaskClass(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function removeCompleted() {
  let tasksDone = document.getElementsByClassName('completed');
  const buttonTaskDone = document.getElementById('remover-finalizados');
  buttonTaskDone.addEventListener('click', function () {
    for (let iRemove = tasksDone.length -1; iRemove >= 0; iRemove -= 1) {
      tasksDone[iRemove].remove();
    }
  });
}
removeCompleted();

function removeSelected() {
  let selectedTask = document.getElementsByClassName('selected');
  const buttonRemoveTask = document.getElementById('remover-selecionado');
  buttonRemoveTask.addEventListener('click', function () {
    selectedTask[0].remove();
  });
}
removeSelected();

function clearAllTasks() {
  let clearArray = document.getElementById('lista-tarefas');
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', function () {
    clearArray.innerHTML = '';
  });
}
clearAllTasks();
