let taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', function(event){
let task = document.getElementById('texto-tarefa');
let taskListItem = document.createElement('li');
let taskList = document.getElementById('lista-tarefas')
taskListItem.innerText = task.value;
taskList.appendChild(taskListItem)
task.value = '';
})