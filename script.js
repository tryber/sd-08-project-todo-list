let taskButton = document.getElementById('criar-tarefa');
let tasksListed = document.getElementsByTagName('li');


taskButton.addEventListener('click', function(event){
let task = document.getElementById('texto-tarefa');
let taskListItem = document.createElement('li');
let taskList = document.getElementById('lista-tarefas')
taskListItem.innerText = task.value;
taskList.appendChild(taskListItem)
taskListItem.classList.add('colorless')
task.value = '';
for (let i = 0; i< tasksListed.length; i+=1 ){
    let taskListed = tasksListed[i];
    taskListed.addEventListener('dblclick', function(event){
    let task = event.target;
    task.classList.toggle('taskSelected');
})}
});

