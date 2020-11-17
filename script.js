function addTask(){
    let taskList= document.querySelector('#lista-tarefas');
    let taskButton=document.querySelector('#criar-tarefa');

    taskButton.addEventListener('click',function(){
        let inputText=document.querySelector('#texto-tarefa');
        let taskElement=document.createElement('li');
        taskElement.innerHTML=inputText.value;
        taskList.appendChild(taskElement);
        taskList.next;
        inputText.value='';
    })
}

addTask();

function addTaskColor() {
    let taskList = document.querySelector("#lista-tarefas");
    taskList.addEventListener('click', function(event) {
    let chosen = document.querySelector('.chosen');
    if (chosen == null) {
        event.target.classList.add('chosen');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    } else {
        chosen.classList.remove('chosen');
        chosen.style.backgroundColor = '';
        event.target.classList.add('chosen');
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    }
    });
}
addTaskColor();

function completedTasks() {
    let item = document.querySelector('#lista-tarefas');
    item.addEventListener('dblclick', function(event) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    });
}
completedTasks();

function cleanList(){
    let cleanButton= document.querySelector('#apaga-tudo');
    cleanButton.addEventListener('click',function(){
        let taskList=document.querySelector('#lista-tarefas');
        taskList.innerHTML='';
    })
}
cleanList();

function eraseCompleted() {
    let buttonEraseCompleted = document.querySelector('#remover-finalizados');
    buttonEraseCompleted.addEventListener('click', function() {
        let taskList = document.querySelector('#lista-tarefas');
        for (let index = 0; index < taskList.children.length; index++) {
            if (taskList.children[index].classList.contains('completed')) {
                taskList.removeChild(taskList.children[index]);
                index -= 1;
            }
        }
    });
}
eraseCompleted();