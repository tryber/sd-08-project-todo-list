let taskButton = document.getElementById('criar-tarefa');
let clearButton = document.getElementById('apaga-tudo');
let tasksListed = document.getElementsByTagName('li');
let listOfTasks = document.getElementById('lista-tarefas');


taskButton.addEventListener('click', function(event){

let task = document.getElementById('texto-tarefa');
let taskListItem = document.createElement('li');
let taskList = document.getElementById('lista-tarefas');
let selectedTasks = document.body.getElementsByClassName('taskSelected')
taskListItem.innerText = task.value;

taskList.appendChild(taskListItem);
task.value = '';

for (let i = 0; i< tasksListed.length; i+=1 ){ // For loop que percorre as li's criadas
    let taskListed = tasksListed[i];
    taskListed.addEventListener('click', function(event){
    let task = event.target;
    
for(let i = 0; i < selectedTasks.length; i+=1){ //For loop interno que percorre as Li's selecionadas
    let selectedTask = selectedTasks[i];
    if(selectedTask){
        selectedTask.classList.toggle('taskSelected')
    }
}
task.classList.toggle('taskSelected');
})

}
});


listOfTasks.addEventListener('dblclick', function(event){
let task = event.target;
task.classList.toggle('completed');
});


clearButton.addEventListener('click', function(event){
    let taskList = document.getElementById('lista-tarefas');
    do {
        taskList.removeChild(taskList.lastChild)
    } while (taskList.firstChild)
})
//Botão limpar (pesquisar do while para remover remove childs)
