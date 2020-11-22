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

function changeLiClassColor(event) {
  let liArray = document.getElementsByClassName('task-style');
  for (let index = 0; index < liArray.length; index += 1) {
    liArray[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}
  
