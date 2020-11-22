function addTask() {
  const buttonAddTask = document.getElementById('criar-tarefa');
  buttonAddTask.addEventListener('click', function () {
    let taskItem = document.getElementById('texto-tarefa');
    let taskList = document.getElementById('lista-tarefas');
    let newTaskItem = document.createElement('li');
    newTaskItem.classList.add('task-style');
    newTaskItem.addEventListener('click', changeLiClassColor)
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
 
function clearAllTasks() {
  let clearArray = document.getElementById('lista-tarefas');
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', function () {
    clearArray.innerHTML = '';
  });
}
clearAllTasks();
