let taskButton = document.getElementById('criar-tarefa');
let tasksListed = document.getElementsByTagName('li');


taskButton.addEventListener('click', function(event){

let task = document.getElementById('texto-tarefa');
let taskListItem = document.createElement('li');
let taskList = document.getElementById('lista-tarefas');
let selectedTasks = document.body.getElementsByClassName('colorless taskSelected')
taskListItem.innerText = task.value;

taskList.appendChild(taskListItem);
taskListItem.classList.add('colorless');
task.value = '';

for (let i = 0; i< tasksListed.length; i+=1 ){
    let taskListed = tasksListed[i];
    taskListed.addEventListener('click', function(event){
    let task = event.target;
    
for(let i = 0; i < selectedTasks.length; i+=1){
    let selectedTask = selectedTasks[i];
    if(selectedTask){
        selectedTask.classList.toggle('taskSelected')
    }
}
task.classList.toggle('taskSelected');
})}
});

